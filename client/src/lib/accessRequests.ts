const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

const DUPLICATE_EMAIL_STATUS = 409;

/**
 * Persist an access request to the leads table.
 *
 * Returns true when the request was recorded (or already existed).
 * Returns false when capture is unconfigured or the network call failed —
 * callers decide how to surface that; access gating must not depend on it.
 */
export async function submitAccessRequest(email: string, name?: string): Promise<boolean> {
  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.warn("Access request capture is not configured (VITE_SUPABASE_* env vars missing).");
    return false;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/access_requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_KEY,
        Prefer: "return=minimal",
      },
      body: JSON.stringify({ email, name: name ?? null }),
    });

    // A duplicate signup is still a successful signup from the visitor's view.
    if (response.ok || response.status === DUPLICATE_EMAIL_STATUS) {
      return true;
    }

    console.error("Access request rejected", response.status, await response.text());
    return false;
  } catch (error) {
    console.error("Failed to submit access request", error);
    return false;
  }
}
