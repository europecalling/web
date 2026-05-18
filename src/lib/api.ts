import emailjs from "@emailjs/browser";
import {
  emailJsConfig,
  getEmailJsConfigError,
  getEmailJsErrorMessage,
} from "@/lib/emailjs-config";
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

export const submitLead = async (data: LeadSubmissionData): Promise<APIResponse> => {
  const validationError = validateLeadSubmission(data);
  if (validationError) {
    return { status: "error", message: validationError };
  }

  const configError = getEmailJsConfigError();
  if (configError) {
    return { status: "error", message: configError };
  }

  const payload = Object.fromEntries(
    Object.entries(data).filter(([, value]) => value !== undefined)
  ) as LeadSubmissionData;

  const templateParams = buildEmailJsParams(payload);

  try {
    await emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, templateParams, {
      publicKey: emailJsConfig.publicKey,
    });
    return { status: "success", message: "Email sent" };
  } catch (error) {
    const detail = getEmailJsErrorMessage(error);
    console.error("EmailJS submission failed", {
      error,
      serviceId: emailJsConfig.serviceId,
      templateId: emailJsConfig.templateId,
    });

    if (detail.toLowerCase().includes("template id not found")) {
      return {
        status: "error",
        message:
          "Email template is missing in EmailJS. Create or restore template_7umuavj in your EmailJS dashboard, then redeploy.",
      };
    }

    return {
      status: "error",
      message: import.meta.env.DEV
        ? `Failed to send email: ${detail}`
        : "Failed to send email. Please try again or contact us directly.",
    };
  }
};
