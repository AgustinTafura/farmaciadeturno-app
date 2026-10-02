import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const calendarId =
  "cf11ee6c6388b89b4686ee72a3692f5eb2053118aa1d147f52371b20b970496f@group.calendar.google.com";
const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

// 📁 Cache temporal válido en Vercel
const DATA_PATH = path.join("/tmp", "calendario.json");

interface CachedCalendarData {
  lastUpdated: string;
  data: Record<string, unknown>;
}

// 🧾 Logs solo por consola
function logMessage(message: string): void {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

// ✉️ Enviar email si ocurre un error
async function sendErrorEmail(error: string): Promise<void> {
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS ||
    !process.env.ERROR_EMAIL_TO
  ) {
    console.warn("⚠️ No se enviará email: faltan variables SMTP en .env");
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: `"Farmacia de Turno" <${process.env.SMTP_USER}>`,
    to: process.env.ERROR_EMAIL_TO,
    subject: "⚠️ Error al actualizar calendario de farmacias",
    text: `Ocurrió un error al consultar la API de Google Calendar:\n\n${error}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    logMessage("📧 Email de error enviado correctamente.");
  } catch (mailErr) {
    if (mailErr instanceof Error) {
      logMessage(`❌ Error al enviar email: ${mailErr.message}`);
    } else {
      logMessage("❌ Error desconocido al enviar email.");
    }
  }
}

export async function GET() {
  try {
    const now = new Date();
    let cachedData: CachedCalendarData | null = null;

    // ✅ Si existe cache y es del mismo día → usarlo
    if (fs.existsSync(DATA_PATH)) {
      const file = fs.readFileSync(DATA_PATH, "utf-8");
      cachedData = JSON.parse(file) as CachedCalendarData;
      const lastUpdated = new Date(cachedData.lastUpdated);

      if (
        lastUpdated.getFullYear() === now.getFullYear() &&
        lastUpdated.getMonth() === now.getMonth() &&
        lastUpdated.getDate() === now.getDate()
      ) {
        logMessage("✅ Cache actual encontrado. No se consulta la API externa.");
        const cors = { "Access-Control-Allow-Origin": "*" };
        return NextResponse.json(cachedData.data, { headers: cors });
      }
    }

    // 🔄 Cache vencido → consultar API
    logMessage("🔄 Consultando API de Google Calendar...");

    const start = new Date();
    start.setDate(now.getDate() - 1);
    const end = new Date();
    end.setDate(now.getDate() + 5);

    const timeMin = start.toISOString();
    const timeMax = new Date(end.getTime() + 86400000).toISOString();

    const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&orderBy=startTime&singleEvents=true`;

    const res = await fetch(url);

    if (!res.ok) {
      const error = `Error HTTP ${res.status}: ${res.statusText}`;
      logMessage(`❌ ${error}`);
      await sendErrorEmail(error);
      return NextResponse.json({ error }, { status: 500 });
    }

    const data: Record<string, unknown> = await res.json();

    const newCache: CachedCalendarData = {
      lastUpdated: now.toISOString(),
      data,
    };

    // 💾 Guardar cache en /tmp (válido en Vercel)
    fs.writeFileSync(DATA_PATH, JSON.stringify(newCache, null, 2));
    logMessage("✅ Nuevo calendario guardado correctamente.");
    const cors = { "Access-Control-Allow-Origin": "*" };
    return NextResponse.json(data, { headers: cors });
  } catch (err) {
    const errorMsg =
      err instanceof Error
        ? `❌ Error general: ${err.message}`
        : "❌ Error desconocido";
    logMessage(errorMsg);
    await sendErrorEmail(errorMsg);
    return NextResponse.json({ error: errorMsg }, { status: 500 });
  }
}
