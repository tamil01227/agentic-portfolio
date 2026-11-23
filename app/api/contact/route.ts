import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST?.trim() || "smtp.gmail.com";
  const port = Number(process.env.SMTP_PORT || "465");
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === "true" : port === 465;
  const user = process.env.SMTP_USER?.trim();
  const password = process.env.SMTP_PASSWORD?.replace(/\s/g, "");

  if (!Number.isInteger(port) || port < 1 || port > 65535 || !user || !password) {
    console.error("Contact email not sent: SMTP configuration is incomplete.", {
      validPort: Number.isInteger(port) && port >= 1 && port <= 65535,
      hasUser: Boolean(user),
      hasPassword: Boolean(password),
    });
    return NextResponse.json({ error: "Email delivery is not configured yet." }, { status: 503 });
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      return NextResponse.json({ error: "Please submit a valid form." }, { status: 400 });
    }
    throw error;
  }

  if (typeof payload !== "object" || payload === null || !("name" in payload) || !("email" in payload) || !("message" in payload)) {
    return NextResponse.json({ error: "Please complete all form fields." }, { status: 400 });
  }

  const { name, email, message } = payload;
  if (
    typeof name !== "string" || typeof email !== "string" || typeof message !== "string" ||
    !name.trim() || name.trim().length > 120 || /[\r\n]/.test(name) ||
    email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    !message.trim() || message.length > 10000
  ) {
    return NextResponse.json({ error: "Please check your details and try again." }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure,
    auth: { user, pass: password },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    await transporter.verify();
    console.info("SMTP connection and login verified.");

    const info = await transporter.sendMail({
      from: `"Website Contact Form" <${user}>`,
      to: user,
      replyTo: email.trim(),
      subject: `Website enquiry from ${name.trim()}`,
      text: `Name: ${name.trim()}\nEmail: ${email.trim()}\n\nProject details:\n${message.trim()}`,
    });

    if (info.accepted.length === 0) {
      console.error("Contact email not accepted by SMTP.", {
        messageId: info.messageId,
        rejectedRecipientCount: info.rejected.length,
      });
      return NextResponse.json({ error: "Email delivery failed. Check the sender settings and try again." }, { status: 502 });
    }

    console.info("Contact email accepted by SMTP for delivery; inbox delivery is not confirmed.", {
      messageId: info.messageId,
      acceptedRecipientCount: info.accepted.length,
    });
  } catch (error) {
    console.error("Contact email not sent: SMTP send failed.", error);
    return NextResponse.json({ error: "Email delivery failed. Check the sender settings and try again." }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
