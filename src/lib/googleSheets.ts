/**
 * Submit form data to Google Sheets
 * Make sure to set up Google Apps Script Web App first
 * See README or setup instructions for details
 */

export interface FormSubmission {
  name: string;
  phone: string;
  source?: string; // 'popup' or 'contact'
  timestamp?: string;
}

/**
 * Submit form data to Google Sheets via Google Apps Script Web App
 * 
 * @param data - Form data to submit
 * @returns Promise<boolean> - true if successful, false otherwise
 */
export async function submitToGoogleSheets(data: FormSubmission): Promise<boolean> {
  try {
    // Replace this URL with your Google Apps Script Web App URL
    // You'll get this URL after deploying your Google Apps Script
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || '';

    if (!GOOGLE_SCRIPT_URL) {
      console.error('Google Script URL not configured. Please set VITE_GOOGLE_SCRIPT_URL in your .env file');
      return false;
    }

    // Add timestamp if not provided
    const submissionData: FormSubmission = {
      ...data,
      timestamp: data.timestamp || new Date().toISOString(),
    };

    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors', // Important for Google Apps Script
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submissionData),
    });

    // Note: With no-cors mode, we can't read the response
    // But the data should still be submitted
    return true;
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return false;
  }
}
