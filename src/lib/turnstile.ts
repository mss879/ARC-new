import "server-only";

/**
 * Cloudflare Turnstile: the contact form's "are you a person?" check.
 *
 * It is on only when BOTH keys are set: NEXT_PUBLIC_TURNSTILE_SITE_KEY (the
 * widget in the browser) and TURNSTILE_SECRET_KEY (this check). With either
 * one missing, the form shows no widget and the server asks for no token, so
 * the form keeps working while the keys are being added.
 *
 * Cloudflare's test keys (always pass) are used for local tests:
 * site key 1x00000000000000000000AA, secret 1x0000000000000000000000000000000AA.
 */

const VERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/** Sent by the widget and checked here, so a token from another form is refused. */
export const TURNSTILE_ACTION = "contact_form";

export function turnstileEnabled(): boolean {
  return Boolean(process.env.TURNSTILE_SECRET_KEY && process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY);
}

export type TurnstileResult = { ok: boolean; reason?: string };

export async function verifyTurnstile(token: unknown, ip?: string): Promise<TurnstileResult> {
  if (typeof token !== "string" || !token || token.length > 2048) {
    return { ok: false, reason: "missing-token" };
  }

  const form = new URLSearchParams({
    secret: process.env.TURNSTILE_SECRET_KEY ?? "",
    response: token,
  });
  if (ip && ip !== "unknown") form.set("remoteip", ip);

  try {
    const res = await fetch(VERIFY_URL, {
      method: "POST",
      body: form,
      signal: AbortSignal.timeout(8000),
    });
    const data = (await res.json()) as {
      success?: boolean;
      action?: string;
      "error-codes"?: string[];
    };
    if (!data.success) {
      return { ok: false, reason: (data["error-codes"] ?? []).join(",") || "failed" };
    }
    if (data.action && data.action !== TURNSTILE_ACTION) {
      return { ok: false, reason: `wrong-action:${data.action}` };
    }
    return { ok: true };
  } catch (error) {
    // Cloudflare could not be reached. Let the enquiry through rather than
    // lose a real one; the hidden field and the timing check still apply.
    console.error("Turnstile check could not reach Cloudflare:", error);
    return { ok: true };
  }
}
