import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const email = (body?.email ?? "").trim();

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    // TODO: wire up Resend (set RESEND_API_KEY + EMAIL_FROM + CONTACT_TO on Vercel)
    const resendKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO ?? "sagencrew@gmail.com";
    const emailFrom = process.env.EMAIL_FROM ?? "noreply@sagencrewnext.com";

    if (resendKey) {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${resendKey}`,
        },
        body: JSON.stringify({
          from: emailFrom,
          to: contactTo,
          subject: "🚀 New Sage Hire Stack waitlist signup",
          html: `<p><strong>Email:</strong> ${email}</p><p>Signed up for early access to Sage Hire Stack.</p>`,
        }),
      });
    } else {
      // Dev fallback — log to console
      console.log("[waitlist] New signup:", email);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[waitlist] Error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
