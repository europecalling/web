import { submitLead, type LeadSubmissionData, type APIResponse } from "@/lib/api";

export type FormNotificationData = LeadSubmissionData;
export type FormNotificationResponse = APIResponse;

/** @deprecated Use submitLead — all forms submit via web.europecalling.co */
export async function notifyFormSubmission(
  data: FormNotificationData
): Promise<FormNotificationResponse> {
  return submitLead(data);
}
