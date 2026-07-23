import { Resend } from "resend";
import { NextResponse } from "next/server";
import { site } from "@/data/content";

export const runtime = "nodejs";

type ApplyPayload = {
  name?: string;
  email?: string;
  business?: string;
  type?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ApplyPayload;

    // Honeypot — bots fill this; humans don't see it
    if (body.website) {
      return NextResponse.json({ ok: true });
    }

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const business = String(body.business || "").trim();
    const type = String(body.type || "").trim();
    const budget = String(body.budget || "").trim() || "Not specified";
    const message = String(body.message || "").trim();

    if (!name || !email || !business || !type || !message) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 },
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("RESEND_API_KEY is missing");
      return NextResponse.json(
        { error: "Email is not configured yet. Please try again later." },
        { status: 500 },
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || site.email;
    const from =
      process.env.RESEND_FROM_EMAIL ||
      `${site.brand} <onboarding@resend.dev>`;

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New project inquiry from ${name}`,
      text: [
        "New application from the A² Studio site",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Business / brand: ${business}`,
        `Project type: ${type}`,
        `Budget range: ${budget}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;line-height:1.5;color:#0A0D0B">
          <h2 style="margin:0 0 12px">New project inquiry</h2>
          <p style="margin:0 0 20px;color:#66736b">Submitted via A² Studio apply form</p>
          <table style="border-collapse:collapse;width:100%;max-width:560px">
            <tr><td style="padding:8px 0;font-weight:600">Name</td><td style="padding:8px 0">${escapeHtml(name)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Business</td><td style="padding:8px 0">${escapeHtml(business)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Project type</td><td style="padding:8px 0">${escapeHtml(type)}</td></tr>
            <tr><td style="padding:8px 0;font-weight:600">Budget</td><td style="padding:8px 0">${escapeHtml(budget)}</td></tr>
          </table>
          <div style="margin-top:20px;padding:16px;background:#F3F5F1;border-radius:12px;white-space:pre-wrap">${escapeHtml(message)}</div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your application. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Apply route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 },
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
