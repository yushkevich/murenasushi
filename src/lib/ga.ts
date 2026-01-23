// Google Analytics 4 Event Tracking Helper
// Provides type-safe wrappers for GA4 recommended events

// Type definitions for event parameters
export interface SelectContentParams {
  content_type?: string;
  content_id?: string;
  placement?: string;
  lang?: string;
  link_url?: string;
  index?: number;
  direction?: 'left' | 'right' | 'next' | 'prev';
  from_index?: number;
  to_index?: number;
  from_language?: string;
  to_language?: string;
}

export interface GenerateLeadParams {
  lead_source?: string;
  placement?: string;
  lang?: string;
  link_url?: string;
  phone?: string;
}

// Check if we're in a browser environment and gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Check if debug mode is enabled
const isDebugMode = (): boolean => {
  return process.env.NEXT_PUBLIC_GA_DEBUG === 'true';
};

/**
 * Track content selection events
 * Used for: CTA buttons, language switches, gallery interactions
 */
export const trackSelectContent = (params: SelectContentParams): void => {
  if (!isGtagAvailable()) {
    if (isDebugMode()) {
      console.log('[GA Debug] gtag not available, skipping select_content event', params);
    }
    return;
  }

  if (isDebugMode()) {
    console.log('[GA Debug] select_content event:', params);
  }

  window.gtag('event', 'select_content', params);
};

/**
 * Track lead generation events
 * Used for: Reservation button, phone call links
 */
export const trackGenerateLead = (params: GenerateLeadParams): void => {
  if (!isGtagAvailable()) {
    if (isDebugMode()) {
      console.log('[GA Debug] gtag not available, skipping generate_lead event', params);
    }
    return;
  }

  if (isDebugMode()) {
    console.log('[GA Debug] generate_lead event:', params);
  }

  window.gtag('event', 'generate_lead', params);
};

// Extend window type to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, any>
    ) => void;
    dataLayer: any[];
  }
}
