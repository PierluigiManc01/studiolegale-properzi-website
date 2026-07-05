import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Public-facing "from" address. Domain must be verified in the Resend dashboard.
const SENDER_ADDRESS = process.env.RESEND_FROM_EMAIL || "Studio Legale Properzi <properzi@studiolegale.it>";

// Real mailbox that receives everything. Only ever referenced server-side, so it
// never ships to the browser bundle — visitors only ever see SENDER_ADDRESS.
const STUDIO_INBOX = process.env.RESEND_TO_EMAIL || "vanessa.properzi@libero.it";

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;

type RequestType = "consulenza" | "candidatura";

interface SendEmailBody {
  type: RequestType;
  name: string;
  email: string;
  phone: string;
  message?: string;
  attachment?: {
    filename: string;
    content: string; // base64, no "data:" prefix
  };
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Metodo non consentito" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY non configurata");
    return res.status(500).json({ error: "Servizio email non configurato" });
  }

  const body = req.body as SendEmailBody;

  if (!body?.type || !body?.name || !body?.email || !body?.phone) {
    return res.status(400).json({ error: "Campi obbligatori mancanti" });
  }

  if (body.type !== "consulenza" && body.type !== "candidatura") {
    return res.status(400).json({ error: "Tipo di richiesta non valido" });
  }

  if (body.type === "candidatura" && !body.attachment?.content) {
    return res.status(400).json({ error: "Curriculum Vitae mancante" });
  }

  let attachments: { filename: string; content: Buffer }[] | undefined;

  if (body.attachment) {
    const approxBytes = (body.attachment.content.length * 3) / 4;
    if (approxBytes > MAX_ATTACHMENT_BYTES) {
      return res.status(400).json({ error: "Il file allegato supera i 5MB" });
    }
    attachments = [
      {
        filename: body.attachment.filename,
        content: Buffer.from(body.attachment.content, "base64"),
      },
    ];
  }

  const subject =
    body.type === "candidatura"
      ? `Candidatura praticante dal sito - ${body.name}`
      : `Richiesta di consulenza dal sito - ${body.name}`;

  const html = `
    <h2>${body.type === "candidatura" ? "Nuova candidatura" : "Nuova richiesta di consulenza"}</h2>
    <p><strong>Nome:</strong> ${escapeHtml(body.name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(body.email)}</p>
    <p><strong>Telefono:</strong> ${escapeHtml(body.phone)}</p>
    ${body.message ? `<p><strong>Messaggio:</strong><br/>${escapeHtml(body.message).replace(/\n/g, "<br/>")}</p>` : ""}
  `.trim();

  try {
    const { error } = await resend.emails.send({
      from: SENDER_ADDRESS,
      to: STUDIO_INBOX,
      replyTo: body.email,
      subject,
      html,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "Invio email fallito" });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Errore invio email:", err);
    return res.status(500).json({ error: "Errore interno" });
  }
}
