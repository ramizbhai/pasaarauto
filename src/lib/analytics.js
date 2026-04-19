/**
 * Simple analytics utility for tracking user conversions and interactions.
 * In production, this would connect to Vercel Analytics, Google Analytics, or a custom backend.
 */

export const ANALYTICS_EVENTS = {
    BOOKING_START: 'booking_initiated',
    BOOKING_COMPLETE: 'booking_completed',
    CALCULATOR_INTERACTION: 'calculator_used',
    GALLERY_MODAL_OPEN: 'gallery_viewed'
};

/**
 * Tracks an event
 * @param {string} eventName 
 * @param {Object} [properties] 
 */
export function trackEvent(eventName, properties = {}) {
    console.log(`[Analytics] Event: ${eventName}`, properties);
    
    // Example: If using custom event tracking
    // if (window.umami) window.umami.track(eventName, properties);
    // if (window.gtag) window.gtag('event', eventName, properties);
}
