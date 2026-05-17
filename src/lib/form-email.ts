export interface FormNotificationData {
  form_type: "Contact Us Form" | "Feedback Form";
  name: string;
  phone: string;
  email?: string;
  message?: string;
  country?: string;
  rating?: number;
}

export interface FormNotificationResponse {
  status: "success" | "error";
  message: string;
}

const FORM_EMAIL_API_URL =
  import.meta.env.VITE_FORM_EMAIL_API_URL ??
  "https://web.europecalling.co/api/send-form-email.php";

/**
 * Sends a notification email via the PHP API. Failures are non-blocking for the user.
 */
export async function notifyFormSubmission(
  data: FormNotificationData
): Promise<FormNotificationResponse> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  const secret = import.meta.env.VITE_FORM_NOTIFY_SECRET;
  if (secret) {
    headers["X-Form-Secret"] = secret;
  }

  try {
    const response = await fetch(FORM_EMAIL_API_URL, {
      method: "POST",
      headers,
      body: JSON.stringify(data),
    });

    const result = (await response.json()) as FormNotificationResponse;

    if (!response.ok) {
      console.warn("Form email notification failed:", result.message);
      return {
        status: "error",
        message: result.message || "Failed to send notification email",
      };
    }

    return result;
  } catch (error) {
    console.warn("Form email notification unreachable:", error);
    return {
      status: "error",
      message: "Could not reach the email service",
    };
  }
}
