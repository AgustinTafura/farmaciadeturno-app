import { Button } from "@material-tailwind/react";
import React from "react";

export function StatsCard() {
  return (
    <div className="flex flex-wrap gap-4">
      {/* Google Calendar */}
      <a
        href="https://calendar.google.com/calendar/embed?src=cf11ee6c6388b89b4686ee72a3692f5eb2053118aa1d147f52371b20b970496f%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="gray">Agregar a Google Calendar</Button>
      </a>

      {/* Apple / Outlook Calendar */}
      <a
        href="https://calendar.google.com/calendar/ical/cf11ee6c6388b89b4686ee72a3692f5eb2053118aa1d147f52371b20b970496f%40group.calendar.google.com/public/basic.ics"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button color="gray" variant="outlined">
          Agregar a iPhone / Outlook
        </Button>
      </a>
    </div>
  );
}

export default StatsCard;
