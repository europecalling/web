import emailjs from "@emailjs/browser";
import { emailJsConfig, getEmailJsErrorMessage } from "@/lib/emailjs-config";
import type { EmailJsTemplateParams } from "@/lib/form-email-builder";

const MAX_ATTEMPTS = 3;
const RETRY_DELAY_MS = 600;

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/** True for transient browser/network failures (e.g. ERR_HTTP2_PROTOCOL_ERROR). */
export function isRetryableEmailJsError(error: unknown): boolean {
  if (error instanceof TypeError) {
    return true;
  }

  if (error && typeof error === "object") {
    const e = error as { status?: number; text?: string };
    // Client / rate-limit errors — do not retry
    if (typeof e.status === "number" && e.status >= 400 && e.status < 500) {
      return false;
    }
  }

  const msg = getEmailJsErrorMessage(error).toLowerCase();
  if (msg === "unknown error" || msg === "") {
    return true;
  }

  return (
    msg.includes("failed to fetch") ||
    msg.includes("network") ||
    msg.includes("http2") ||
    msg.includes("protocol") ||
    msg.includes("load failed") ||
    msg.includes("connection")
  );
}

export async function sendEmailJsTemplate(templateParams: EmailJsTemplateParams): Promise<void> {
  let lastError: unknown;

  for (let attempt = 0; attempt < MAX_ATTEMPTS; attempt++) {
    try {
      await emailjs.send(emailJsConfig.serviceId, emailJsConfig.templateId, templateParams);
      return;
    } catch (error) {
      lastError = error;
      const canRetry = attempt < MAX_ATTEMPTS - 1 && isRetryableEmailJsError(error);
      if (!canRetry) {
        break;
      }
      await sleep(RETRY_DELAY_MS * (attempt + 1));
    }
  }

  throw lastError;
}

export function getNetworkErrorUserMessage(error: unknown): string {
  if (isRetryableEmailJsError(error)) {
    return "Connection to the email service failed. Check your network or ad blocker, then try again.";
  }
  return getEmailJsErrorMessage(error);
}
