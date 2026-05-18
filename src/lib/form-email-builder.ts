export interface FormSubmissionData {
  name: string;
  phone: string;
  email?: string;
  message?: string;
  form_type?: string;
  country?: string;
  rating?: number;
  [key: string]: unknown;
}

const FIELD_LABELS: Record<string, string> = {
  whatsapp_number: "WhatsApp Number",
  travel_date: "Travel Dates",
  budget_range: "Budget Range",
  package_type: "Package Type",
  special_requests: "Special Requests",
  hotel_category: "Hotel Category",
  is_whatsapp_same: "WhatsApp Same as Phone",
  destination: "Destination",
  country: "Country of Interest",
  adults: "Adults",
  kids: "Kids",
  source: "Source",
  rating: "Rating",
  message: "Message",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-1000": "Under $1,000",
  "1000-2500": "$1,000 – $2,500",
  "2500-5000": "$2,500 – $5,000",
  "5000-10000": "$5,000 – $10,000",
  "over-10000": "Over $10,000",
};

const REQUEST_LABELS: Record<string, string> = {
  honeymoon: "Honeymoon",
  family: "Family Trip",
  "visa-help": "Visa Help",
};

const ORDERED_KEYS = [
  "whatsapp_number",
  "is_whatsapp_same",
  "destination",
  "country",
  "package_type",
  "travel_date",
  "adults",
  "kids",
  "budget_range",
  "hotel_category",
  "special_requests",
  "source",
] as const;

const HANDLED_KEYS = new Set([
  "form_type",
  "name",
  "email",
  "phone",
  "message",
  "country",
  "rating",
  ...ORDERED_KEYS,
]);

function formatFormFieldLabel(key: string): string {
  return FIELD_LABELS[key] ?? key.replace(/[_-]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
}

function formatFormFieldValue(key: string, value: unknown): string {
  if (typeof value === "boolean") {
    return value ? "Yes" : "No";
  }

  const str = String(value ?? "").trim();
  if (str === "") {
    return "";
  }

  if (key === "budget_range") {
    return BUDGET_LABELS[str] ?? str;
  }

  if (key === "special_requests") {
    return str
      .split(",")
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => REQUEST_LABELS[part] ?? part.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()))
      .join(", ");
  }

  if (key === "destination" || key === "country") {
    return str.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  if (key === "package_type") {
    return str.replace(/[-_]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());
  }

  if (key === "travel_date" && /^\d{4}-\d{2}-\d{2}$/.test(str)) {
    const [y, m, d] = str.split("-").map(Number);
    const dt = new Date(y, m - 1, d);
    if (!Number.isNaN(dt.getTime())) {
      return dt.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
    }
  }

  return str;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function nl2br(text: string): string {
  return escapeHtml(text).replace(/\n/g, "<br>");
}

export function buildFormEmailRows(data: FormSubmissionData): Record<string, string> {
  const formType = String(data.form_type ?? "Website Form");
  const name = String(data.name ?? "");
  const email = String(data.email ?? "");
  const phone = String(data.phone ?? "");
  const message = String(data.message ?? "");
  const country = String(data.country ?? "");
  const rating = data.rating != null ? Number(data.rating) : null;

  const submittedAt = new Date().toLocaleString("en-GB", {
    timeZone: "Asia/Kolkata",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
    timeZoneName: "short",
  });

  const rows: Record<string, string> = {
    "Form Type": formType,
    Name: name,
    Email: email || "(not provided)",
    Phone: phone,
    "Submitted At": submittedAt,
  };

  if (country !== "") {
    rows["Country of Interest"] = formatFormFieldValue("country", country);
  }
  if (rating != null && rating > 0) {
    rows.Rating = `${rating} / 5`;
  }
  if (message !== "") {
    rows.Message = message;
  }

  for (const key of ORDERED_KEYS) {
    if (!(key in data)) {
      continue;
    }
    const formatted = formatFormFieldValue(key, data[key]);
    if (formatted === "") {
      continue;
    }
    if (key === "country" && country !== "") {
      continue;
    }
    rows[formatFormFieldLabel(key)] = formatted;
  }

  for (const [key, value] of Object.entries(data)) {
    if (HANDLED_KEYS.has(key) || value == null || value === "") {
      continue;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      const formatted = formatFormFieldValue(key, value);
      if (formatted !== "") {
        rows[formatFormFieldLabel(key)] = formatted;
      }
    }
  }

  return rows;
}

export function buildEmailSubject(data: FormSubmissionData): string {
  const formType = String(data.form_type ?? "Website Form");
  const name = String(data.name ?? "");
  const rating = data.rating != null ? Number(data.rating) : null;
  const isFeedback = formType.toLowerCase().includes("feedback");

  if (isFeedback && rating != null && rating > 0) {
    const clamped = Math.min(5, Math.max(1, rating));
    const stars = "★".repeat(clamped) + "☆".repeat(5 - clamped);
    return `[Feedback] ${rating}/5 (${stars}) from ${name}`;
  }

  return `[${formType}] New submission from ${name}`;
}

export function buildRowsHtml(rows: Record<string, string>): string {
  let html = "";
  for (const [label, value] of Object.entries(rows)) {
    html +=
      `<tr><td style="padding:8px 12px;border:1px solid #eee;font-weight:600;color:#555;">${escapeHtml(label)}</td>` +
      `<td style="padding:8px 12px;border:1px solid #eee;">${nl2br(value)}</td></tr>`;
  }
  return html;
}

export interface EmailJsTemplateParams {
  subject: string;
  form_type: string;
  rows_html: string;
  reply_to?: string;
}

export function buildEmailJsParams(data: FormSubmissionData): EmailJsTemplateParams {
  const formType = String(data.form_type ?? "Website Form");
  const email = String(data.email ?? "").trim();
  const rows = buildFormEmailRows(data);

  const params: EmailJsTemplateParams = {
    subject: buildEmailSubject(data),
    form_type: formType,
    rows_html: buildRowsHtml(rows),
  };

  if (email !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    params.reply_to = email;
  }

  return params;
}

export function validateLeadSubmission(data: FormSubmissionData): string | null {
  const name = String(data.name ?? "").trim();
  const phone = String(data.phone ?? "").trim();
  const email = String(data.email ?? "").trim();
  const message = String(data.message ?? "").trim();
  const country = String(data.country ?? "").trim();
  const formType = String(data.form_type ?? "Website Form").trim();

  if (name === "" || phone === "") {
    return "Name and phone are required";
  }
  if (name.length > 200) {
    return "Name is too long";
  }
  if (phone.length > 50) {
    return "Phone is too long";
  }
  if (email.length > 254) {
    return "Email is too long";
  }
  if (message.length > 5000) {
    return "Message is too long";
  }
  if (country.length > 100) {
    return "Country is too long";
  }
  if (email !== "" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return "Invalid email address";
  }
  if (formType === "" || formType.length > 120) {
    return "Invalid form type";
  }

  return null;
}
