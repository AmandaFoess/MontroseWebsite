import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";
import { z } from "zod";

// Self-contained on purpose: Vercel bundles each api/ file as its own ESM
// function, where an extensionless relative import fails at runtime. The local
// Express server mounts this same handler (server/routes.ts).

const TO_ADDRESS = "info@themontroseteam.com";
const FROM_ADDRESS = "Montrose Website <no-reply@themontroseteam.com>";

// Must match the rules in client/src/components/ContactForm.tsx, or a form the
// browser accepts gets rejected here.
const contactSchema = z.object({
  name: z.string().min(2),
  company: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  subject: z.string().min(5),
  message: z.string().min(10),
});

type ContactSubmission = z.infer<typeof contactSchema>;

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label: string, valueHtml: string, last = false): string {
  const border = last ? "" : "border-bottom:1px solid #eee;";
  return `<tr><td style="padding:8px;font-weight:bold;vertical-align:top;${border}">${label}</td><td style="padding:8px;${border}">${valueHtml}</td></tr>`;
}

export function buildContactEmail(data: ContactSubmission) {
  const e = {
    name: escapeHtml(data.name),
    company: escapeHtml(data.company),
    email: escapeHtml(data.email),
    phone: escapeHtml(data.phone),
    subject: escapeHtml(data.subject),
    message: escapeHtml(data.message).replace(/\r?\n/g, "<br>"),
  };

  return {
    from: FROM_ADDRESS,
    to: TO_ADDRESS,
    replyTo: data.email,
    subject: `New Contact Form: ${data.subject.replace(/[\r\n]+/g, " ")}`,
    html: [
      "<h2>New Contact Form Submission</h2>",
      '<table style="border-collapse:collapse;width:100%;max-width:600px;">',
      row("Name", e.name),
      row("Company", e.company),
      row("Email", `<a href="mailto:${e.email}">${e.email}</a>`),
      row("Phone", `<a href="tel:${e.phone}">${e.phone}</a>`),
      row("Subject", e.subject),
      row("Message", e.message, true),
      "</table>",
    ].join("\n"),
    text: [
      `Name: ${data.name}`,
      `Company: ${data.company}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Subject: ${data.subject}`,
      "",
      data.message,
    ].join("\n"),
  };
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed" });
  }

  const parsed = contactSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ success: false, error: "Please check the form and try again." });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
  }

  try {
    // send() reports API failures in `error` instead of throwing.
    const { error } = await new Resend(apiKey).emails.send(buildContactEmail(parsed.data));
    if (error) {
      console.error("Contact form: Resend rejected the email:", error);
      return res.status(502).json({ success: false, error: "Failed to send message. Please try again." });
    }
    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Contact form: sending failed:", err);
    return res.status(502).json({ success: false, error: "Failed to send message. Please try again." });
  }
}
