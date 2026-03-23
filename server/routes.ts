import type { Express } from "express";
import { createServer, type Server } from "http";
import { Resend } from "resend";
import { insertContactSubmissionSchema } from "@shared/schema";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/contact", async (req, res) => {
    try {
      const data = insertContactSubmissionSchema.parse(req.body);

      await resend.emails.send({
        from: "Montrose Website <no-reply@themontroseteam.com>",
        to: "info@themontroseteam.com",
        subject: `New Contact Form: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <table style="border-collapse:collapse;width:100%;max-width:600px;">
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Name</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.name}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Company</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.company}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Email</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Phone</td><td style="padding:8px;border-bottom:1px solid #eee;"><a href="tel:${data.phone}">${data.phone}</a></td></tr>
            <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee;">Subject</td><td style="padding:8px;border-bottom:1px solid #eee;">${data.subject}</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top;">Message</td><td style="padding:8px;">${data.message.replace(/\n/g, "<br>")}</td></tr>
          </table>
        `,
      });

      res.json({ success: true });
    } catch (error: any) {
      console.error("Contact form error:", error);
      res.status(500).json({ success: false, error: "Failed to send message. Please try again." });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
