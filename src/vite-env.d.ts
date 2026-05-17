/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_FORM_API_URL?: string;
  readonly VITE_FORM_EMAIL_API_URL?: string;
  readonly VITE_FORM_NOTIFY_SECRET?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.mov" {
    const src: string;
    export default src;
}
