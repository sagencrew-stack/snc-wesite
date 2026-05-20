import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const TOPIC_LABELS: Record<string, string> = {
  recruitment: "Recruitment — hiring a role",
  software: "Software project",
  ai: "AI / automation",
  candidate: "Candidate — looking for a role",
  other: "Something else",
};

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Enter a valid email").max(200),
  company: z.string().trim().max(200).optional(),
  topic: z.enum(["recruitment", "software", "ai", "candidate", "other"]).default("other"),
  message: z.string().trim().min(5, "Tell us a bit more").max(5000),
  // Honeypot — bots will fill this, humans won't see the field
  website: z.string().optional(),
});

export async function POST(request: NextRequest) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: parsed.error.issues[0]?.message ?? "Invalid input" },
      { status: 400 },
    );
  }

  // Honeypot: silently accept + drop bot submissions
  if (parsed.data.website && parsed.data.website.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("[contact] RESEND_API_KEY missing");
    return NextResponse.json(
      { ok: false, error: "Email service not configured" },
      { status: 500 },
    );
  }

  const from = process.env.EMAIL_FROM ?? "Sage & Crew Next <noreply@sagencrew.com>";
  const to = process.env.CONTACT_TO ?? "sagencrew@gmail.com";

  const topicLabel = TOPIC_LABELS[parsed.data.topic] ?? parsed.data.topic;
  const subject = `[${topicLabel}] — ${parsed.data.name}${
    parsed.data.company ? ` (${parsed.data.company})` : ""
  }`;

  const html = buildHtml(parsed.data, topicLabel);
  const text = buildText(parsed.data, topicLabel);

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to,
      replyTo: parsed.data.email,
      subject,
      html,
      text,
    });
    if (result.error) {
      console.error("[contact] resend error:", result.error.message);
      return NextResponse.json(
        { ok: false, error: "Couldn't send — please email sagencrew@gmail.com directly" },
        { status: 502 },
      );
    }
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("[contact] send threw:", (e as Error).message);
    return NextResponse.json(
      { ok: false, error: "Couldn't send — please email sagencrew@gmail.com directly" },
      { status: 502 },
    );
  }
}

function buildHtml(
  data: z.infer<typeof contactSchema>,
  topicLabel: string,
): string {
  return /* html */ `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8" /></head>
<body style="margin:0; padding:0; background:#F8F7F2; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Plus Jakarta Sans',sans-serif;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F8F7F2; padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" style="max-width:560px; background:#FFFFFF; border-radius:12px; overflow:hidden; box-shadow:0 1px 3px rgba(0,0,0,0.04);">
          <tr>
            <td style="background:#0B1F3A; padding:20px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#D4AF37; border-radius:8px; width:32px; height:32px; text-align:center; font-family:Georgia,serif; font-weight:bold; color:#0B1F3A; font-size:16px;">S</td>
                  <td style="padding-left:12px; font-family:Georgia,serif; font-size:16px; color:#F5E6B8;">New contact form submission</td>
                </tr>
              </table>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <h1 style="margin:0 0 16px 0; font-size:20px; color:#0B1F3A; font-family:Georgia,serif;">${escapeHtml(topicLabel)}</h1>
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:0 0 16px 0; border:1px solid #E2E8F0; border-radius:8px; padding:16px;">
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0 0 2px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#64748B;">From</p>
                    <p style="margin:0; font-size:15px; color:#1E293B;"><strong>${escapeHtml(data.name)}</strong></p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;">
                    <p style="margin:0 0 2px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#64748B;">Email</p>
                    <p style="margin:0; font-size:14px; color:#1E293B;"><a href="mailto:${escapeAttr(data.email)}" style="color:#0B1F3A;">${escapeHtml(data.email)}</a></p>
                  </td>
                </tr>
                ${
                  data.company
                    ? `<tr><td>
                  <p style="margin:0 0 2px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#64748B;">Company</p>
                  <p style="margin:0; font-size:14px; color:#1E293B;">${escapeHtml(data.company)}</p>
                </td></tr>`
                    : ""
                }
              </table>
              <p style="margin:0 0 4px 0; font-size:11px; text-transform:uppercase; letter-spacing:0.05em; color:#64748B;">Message</p>
              <div style="white-space:pre-wrap; font-size:14px; line-height:1.55; color:#1E293B; padding:12px; background:#F8F7F2; border-radius:8px;">${escapeHtml(data.message)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:14px 28px; background:#F8F7F2; border-top:1px solid #E2E8F0; font-size:11px; color:#64748B;">
              <p style="margin:0;">Reply to this email to respond directly to ${escapeHtml(data.email)}.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function buildText(data: z.infer<typeof contactSchema>, topicLabel: string): string {
  return [
    `New contact form submission — ${topicLabel}`,
    "",
    `Name:    ${data.name}`,
    `Email:   ${data.email}`,
    data.company ? `Company: ${data.company}` : "",
    "",
    "Message:",
    data.message,
    "",
    `Reply directly to ${data.email}.`,
  ]
    .filter(Boolean)
    .join("\n");
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function escapeAttr(s: string): string {
  return escapeHtml(s);
}
