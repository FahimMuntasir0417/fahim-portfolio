import { NextResponse } from "next/server";
import { siteConfig } from "@/lib/site";

type ContactRequest = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  message?: unknown;
};

const emailPattern = /\S+@\S+\.\S+/;
const resendEndpoint = "https://api.resend.com/emails";

function jsonError(message: string, status = 400) {
  return NextResponse.json({ ok: false, message }, { status });
}

function getString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let payload: ContactRequest;

  try {
    payload = await request.json();
  } catch {
    return jsonError("Invalid JSON payload.");
  }

  const name = getString(payload.name);
  const email = getString(payload.email);
  const company = getString(payload.company);
  const projectType = getString(payload.projectType);
  const message = getString(payload.message);

  if (!name || !email || !projectType || !message) {
    return jsonError("Please complete all required fields.");
  }

  if (!emailPattern.test(email)) {
    return jsonError("Please provide a valid email address.");
  }

  if (message.length < 20) {
    return jsonError("Please provide at least a short project summary.");
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";

  if (!apiKey) {
    return jsonError("Contact email delivery is not configured.", 500);
  }

  const subject = `${projectType} inquiry from ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Company / Organization: ${company || "Not provided"}`,
    `Project type: ${projectType}`,
    "",
    message
  ].join("\n");

  const response = await fetch(resendEndpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject,
      text
    })
  });

  if (!response.ok) {
    return jsonError("Message delivery failed. Please try again later.", 502);
  }

  return NextResponse.json({ ok: true, message: "Your inquiry was sent successfully." });
}
