import emailjs from "@emailjs/browser";
import {
  buildEmailJsParams,
  validateLeadSubmission,
} from "@/lib/form-email-builder";

export interface LeadSubmissionData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  form_type?: string;
  [key: string]: unknown;
}

export interface APIResponse {
  status: "success" | "error";
  message: string;
}

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export const submitLead = async (data: LeadSubmissionData): Promise<APIResponse> => {
  const validationError = validateLeadSubmission(data);
  if (validationError) {
    return { status: "error", message: validationError };
  }

  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    return {
      status: "error",
      message: "Email service is not configured",
    };
  }

  const payload = Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined)
  ) as LeadSubmissionData;

  const templateParams = buildEmailJsParams(payload);

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, {
      publicKey: PUBLIC_KEY,
    });
    return { status: "success", message: "Email sent" };
  } catch (error) {
    console.error("EmailJS submission failed", error);
    return {
      status: "error",
      message: "Failed to send email. Please try again or contact us directly.",
    };
  }
};
