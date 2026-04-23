import { SMTPClient } from "npm:emailjs@4.0.3";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

interface ContactPayload {
  name: string;
  email: string;
  phone?: string;
  whatsappAvailable?: boolean;
  message: string;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function validate(p: any): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!p || typeof p !== "object") return { ok: false, error: "Invalid body" };
  const name = String(p.name ?? "").trim();
  const email = String(p.email ?? "").trim();
  const message = String(p.message ?? "").trim();
  const phone = p.phone ? String(p.phone).trim().slice(0, 30) : "";
  const whatsappAvailable = Boolean(p.whatsappAvailable);

  if (!name || name.length > 100) return { ok: false, error: "Invalid name" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 255)
    return { ok: false, error: "Invalid email" };
  if (!message || message.length > 5000) return { ok: false, error: "Invalid message" };

  return { ok: true, data: { name, email, phone, whatsappAvailable, message } };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const result = validate(body);
    if (!result.ok) {
      return new Response(JSON.stringify({ error: result.error }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    const { name, email, phone, whatsappAvailable, message } = result.data;

    const GMAIL_USER = Deno.env.get("GMAIL_USER");
    const GMAIL_APP_PASSWORD = Deno.env.get("GMAIL_APP_PASSWORD");
    if (!GMAIL_USER || !GMAIL_APP_PASSWORD) {
      console.error("Missing GMAIL_USER or GMAIL_APP_PASSWORD");
      return new Response(JSON.stringify({ error: "Email not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const client = new SMTPClient({
      user: GMAIL_USER,
      password: GMAIL_APP_PASSWORD,
      host: "smtp.gmail.com",
      ssl: true,
      port: 465,
    });

    const html = `
      <div style="font-family:Arial,sans-serif;color:#111">
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        ${phone ? `<p><strong>Phone:</strong> ${escapeHtml(phone)} ${whatsappAvailable ? "(WhatsApp available)" : ""}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p style="white-space:pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    const text = `New Portfolio Contact

Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}${whatsappAvailable ? " (WhatsApp available)" : ""}\n` : ""}
Message:
${message}
`;

    await client.sendAsync({
      from: `${name} <${GMAIL_USER}>`,
      to: "fahadnomanofficial@gmail.com",
      "reply-to": email,
      subject: `Portfolio Contact from ${name}`,
      text,
      attachment: [{ data: html, alternative: true }],
    });

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("send-contact-email error:", err);
    return new Response(
      JSON.stringify({ error: (err as Error).message ?? "Failed to send" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
