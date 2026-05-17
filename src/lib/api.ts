export interface LeadSubmissionData {
    // Required Fields
    name: string;
    phone: string;

    // Optional Standard Fields
    email?: string;
    message?: string;
    form_type?: string;

    // Dynamic Fields
    [key: string]: any;
}

export interface APIResponse {
    status: "success" | "error";
    message: string;
    lead_id?: number;
}

const FORM_API_URL =
    import.meta.env.VITE_FORM_API_URL ?? "https://web.europecalling.co/submit-form.php";

export const submitLead = async (data: LeadSubmissionData): Promise<APIResponse> => {
    const headers: Record<string, string> = {
        "Content-Type": "application/json",
    };

    const secret = import.meta.env.VITE_FORM_NOTIFY_SECRET;
    if (secret) {
        headers["X-Form-Secret"] = secret;
    }

    try {
        const payload = Object.fromEntries(
            Object.entries(data).filter(([, value]) => value !== undefined)
        );

        const response = await fetch(FORM_API_URL, {
            method: "POST",
            headers,
            body: JSON.stringify(payload),
        });

        const text = await response.text();
        let result: APIResponse;
        try {
            result = JSON.parse(text) as APIResponse;
        } catch {
            return {
                status: "error",
                message: response.ok
                    ? "Invalid response from server"
                    : "Form service unavailable. Check https://web.europecalling.co/submit-form.php",
            };
        }

        if (!response.ok) {
            return {
                status: "error",
                message: result.message || "An error occurred during submission",
            };
        }

        return result;
    } catch (error) {
        console.error("Submission failed", error);
        return {
            status: "error",
            message: "Network error or server is unreachable",
        };
    }
};
