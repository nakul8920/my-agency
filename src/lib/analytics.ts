/**
 * Google Analytics and tracking setup
 * Add your Google Analytics ID in environment variables
 */

// Google Analytics 4 (GA4) - Replace with your actual Measurement ID
const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || '';

/**
 * Initialize Google Analytics
 */
export const initAnalytics = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined') {
    return;
  }

  // Load Google Analytics script
  const script1 = document.createElement('script');
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script1);

  const script2 = document.createElement('script');
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${GA_MEASUREMENT_ID}');
  `;
  document.head.appendChild(script2);
};

/**
 * Track page view
 */
export const trackPageView = (url: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('config', GA_MEASUREMENT_ID, {
    page_path: url,
  });
};

/**
 * Track form submission event
 */
export const trackFormSubmission = (formType: 'popup' | 'contact', formData?: { name?: string; phone?: string }) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', 'form_submission', {
    event_category: 'Form',
    event_label: formType === 'popup' ? 'Popup Form' : 'Contact Form',
    form_type: formType,
    // Don't send PII (personally identifiable information)
  });
};

/**
 * Track button click event
 */
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', 'button_click', {
    event_category: 'Engagement',
    event_label: buttonName,
    button_location: buttonLocation,
  });
};

/**
 * Track WhatsApp click event
 */
export const trackWhatsAppClick = () => {
  if (!GA_MEASUREMENT_ID || typeof window === 'undefined' || !(window as any).gtag) {
    return;
  }

  (window as any).gtag('event', 'whatsapp_click', {
    event_category: 'Contact',
    event_label: 'WhatsApp Button',
  });
};
