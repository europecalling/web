import { submitLead, type LeadSubmissionData, type APIResponse } from "@/lib/api";

export type FormNotificationData = LeadSubmissionData;
export type FormNotificationResponse = APIResponse;

/** @deprecated Use submitLead — posts to https://web.europecalling.co/submit-form.php */
export async function notifyFormSubmission(
  data: FormNotificationData
): Promise<FormNotificationResponse> {
  return submitLead(data);
}
