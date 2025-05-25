import { NextResponse } from "next/server";

const calendarId =
  "cf11ee6c6388b89b4686ee72a3692f5eb2053118aa1d147f52371b20b970496f@group.calendar.google.com";
const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;

export async function GET() {
  const today = new Date();
  const start = new Date(today);
  start.setDate(today.getDate() - 1);
  const end = new Date(today);
  end.setDate(today.getDate() + 5);

  const timeMin = start.toISOString();
  const timeMax = new Date(end.getTime() + 86400000).toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events?key=${apiKey}&timeMin=${timeMin}&timeMax=${timeMax}&orderBy=startTime&singleEvents=true`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
