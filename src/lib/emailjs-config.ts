/** Public EmailJS IDs — safe to ship in the client bundle. Env vars override these at build time. */
const DEFAULTS = {
  serviceId: "service_s3iqvqc",
  templateId: "template_7zm006y",
  publicKey: "lrCyBzm0RH8baNYAC",
  recipientEmails: ["mail.europecalling@gmail.com", "sales@europecalling.co"],
} as const;

function readEnv(value: string | undefined, fallback: string): string {
  const trimmed = value?.trim();
  return trimmed && trimmed !== "your_service_id" && trimmed !== "your_template_id" && trimmed !== "your_public_key"
    ? trimmed
    : fallback;
}

function readRecipientEmails(value: string | undefined): readonly string[] {
  const trimmed = value?.trim();
  if (!trimmed) {
    return DEFAULTS.recipientEmails;
  }

  const emails = trimmed
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);

  return emails.length > 0 ? emails : DEFAULTS.recipientEmails;
}

export const emailJsConfig = {
  serviceId: readEnv(import.meta.env.VITE_EMAILJS_SERVICE_ID, DEFAULTS.serviceId),
  templateId: readEnv(import.meta.env.VITE_EMAILJS_TEMPLATE_ID, DEFAULTS.templateId),
  publicKey: readEnv(import.meta.env.VITE_EMAILJS_PUBLIC_KEY, DEFAULTS.publicKey),
  recipientEmails: readRecipientEmails(import.meta.env.VITE_EMAILJS_RECIPIENT_EMAILS),
};

export function getEmailJsConfigError(): string | null {
  if (!emailJsConfig.serviceId || !emailJsConfig.templateId || !emailJsConfig.publicKey) {
    return "Email service is not configured";
  }
  if (emailJsConfig.recipientEmails.length === 0) {
    return "Email recipients are not configured";
  }
  return null;
}

export function getEmailJsErrorMessage(error: unknown): string {
  if (error && typeof error === "object") {
    const e = error as { text?: string; message?: string; status?: number };
    if (e.text) {
      return e.text;
    }
    if (e.message) {
      return e.message;
    }
  }
  if (error instanceof Error) {
    return error.message;
  }
  return "Unknown error";
}
