import { toast } from "sonner";
import { emailJsConfig, getEmailJsConfigError, getEmailJsErrorMessage } from "@/lib/emailjs-config";
import { getNetworkErrorUserMessage, sendEmailJsTemplate } from "@/lib/emailjs-send";
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

const sendQueue: LeadSubmissionData[] = [];
let isProcessingQueue = false;

async function deliverLeadEmail(payload: LeadSubmissionData): Promise<APIResponse> {
  const templateParams = buildEmailJsParams(payload);

  try {
    await sendEmailJsTemplate(templateParams);
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

    const networkMessage = getNetworkErrorUserMessage(error);

    return {
      status: "error",
      message: import.meta.env.DEV ? `Failed to send email: ${detail || networkMessage}` : networkMessage,
    };
  }
}

async function processSendQueue(): Promise<void> {
  if (isProcessingQueue) {
    return;
  }
  isProcessingQueue = true;

  try {
    while (sendQueue.length > 0) {
      const payload = sendQueue.shift()!;
      const result = await deliverLeadEmail(payload);
      if (result.status === "error") {
        toast.error("Couldn't send your message", {
          description: result.message,
          duration: 6000,
        });
      }
    }
  } finally {
    isProcessingQueue = false;
  }
}

function enqueueLeadEmail(payload: LeadSubmissionData): void {
  sendQueue.push(payload);
  void processSendQueue();
}

/**
 * Validates input, returns success immediately, and sends email in the background.
 * Pass `{ awaitDelivery: true }` to wait for EmailJS (slower UX).
 */
export const submitLead = async (
  data: LeadSubmissionData,
  options?: { awaitDelivery?: boolean }
): Promise<APIResponse> => {
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

  if (options?.awaitDelivery) {
    return deliverLeadEmail(payload);
  }

  enqueueLeadEmail(payload);
  return { status: "success", message: "Email sent" };
};
