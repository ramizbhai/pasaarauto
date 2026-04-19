import { fail } from '@sveltejs/kit';
import { createBooking, isDuplicateBooking } from '$lib/appwrite/api/booking.server';
import { sendBookingNotification } from '$lib/appwrite/api/notifications.server';

/** @type {Map<string, number>} */
const rateLimitMap = new Map();

/**
 * Simple in-memory rate limiter (per IP per minute)
 * @param {string} ip 
 * @returns {boolean} True if limited
 */
function isRateLimited(ip) {
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);
    
    if (lastRequest && (now - lastRequest) < 60000) {
        return true;
    }
    
    rateLimitMap.set(ip, now);
    return false;
}

/** @type {import('./$types').Actions} */
export const actions = {
    default: async ({ request, getClientAddress }) => {
        const formData = await request.formData();
        const ip = getClientAddress();

        // 1. Rate Limiting
        if (isRateLimited(ip)) {
            console.warn(`[Security] Rate limit triggered for IP: ${ip}`);
            return fail(429, { 
                message: 'Too many requests. Please wait a minute before trying again.' 
            });
        }

        // 2. Honeypot check
        const honeypot = formData.get('website');
        if (honeypot) {
            console.warn(`[Security] Honeypot triggered for IP: ${ip}`);
            return fail(400, { message: 'Spam detected.' });
        }

        // 3. Extract and Sanitize Data
        const data = {
            carBrand: formData.get('carBrand')?.toString().trim(),
            carModel: formData.get('carModel')?.toString().trim(),
            carYear: formData.get('carYear')?.toString().trim(),
            serviceId: formData.get('serviceId')?.toString().trim(),
            customerName: formData.get('customerName')?.toString().trim(),
            customerPhone: formData.get('customerPhone')?.toString().trim(),
            customerEmail: formData.get('customerEmail')?.toString().trim(),
            preferredDate: formData.get('preferredDate')?.toString().trim(),
            notes: formData.get('notes')?.toString().trim()
        };

        // 4. Server-Side Validation
        const errors = {};
        if (!data.carBrand) errors.carBrand = 'Car brand is required';
        if (!data.carModel) errors.carModel = 'Car model is required';
        if (!data.customerName) errors.customerName = 'Name is required';
        if (!data.customerPhone || data.customerPhone.length < 10) {
            errors.customerPhone = 'Valid phone number is required';
        }
        if (!data.customerEmail?.includes('@')) {
            errors.customerEmail = 'Valid email is required';
        }
        if (!data.preferredDate) errors.preferredDate = 'Please select a date';

        if (Object.keys(errors).length > 0) {
            return fail(400, { errors, data });
        }

        // 5. Check for Duplicate Booking
        const isDuplicate = await isDuplicateBooking(
            data.customerPhone || '', 
            data.preferredDate || ''
        );

        if (isDuplicate) {
            return fail(409, { 
                message: 'A booking already exists for this phone number on the selected date.',
                data 
            });
        }

        // 6. Final Submission
        const result = await createBooking(data);

        if (!result.success) {
            return fail(500, { 
                message: 'Our scheduling system is currently offline. Please try again in 5 minutes.',
                data 
            });
        }

        // 7. Trigger Notification (Background/Placeholder)
        // Note: In production, Appwrite Functions handle this via the .create event.
        // This call serves as a local hook or direct trigger if needed.
        await sendBookingNotification(data);

        return { success: true };
    }
};
