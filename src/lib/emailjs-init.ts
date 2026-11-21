import emailjs from "@emailjs/browser";
import { emailJsConfig } from "@/lib/emailjs-config";

/** Warm up EmailJS on app load so the first form submit is faster. */
export function initEmailJs(): void {
  if (!emailJsConfig.publicKey) {
    return;
  }
  emailjs.init({ publicKey: emailJsConfig.publicKey });
}

initEmailJs();
