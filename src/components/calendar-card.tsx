import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import { Event } from "@/types/event";

type cardDataProps = {
  cardData?: Event;
};

function getStatusMessage(eventDateStr: string): string {
  const tz = "America/Argentina/Buenos_Aires";
  const now = new Date(new Date().toLocaleString("en-US", { timeZone: tz }));

  const eventDate = new Date(`${eventDateStr}T08:30:00-03:00`); // apertura
  const closingDate = new Date(eventDate.getTime() + 24 * 60 * 60 * 1000); // cierre

  if (now < eventDate) {
    const diffMs = eventDate.getTime() - now.getTime();

    if (diffMs > 24 * 60 * 60 * 1000) {
      // Formato: Martes 8:30
      const formattedDate = new Intl.DateTimeFormat("es-AR", {
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        hour12: false,
        timeZone: tz,
      }).format(eventDate);

      const capitalized =
        formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

      return `Abre el ${capitalized}`;
    }

    const diff = formatDiff(diffMs);
    return `Abre en ${diff}`;
  } else if (now >= eventDate && now < closingDate) {
    const diffMs = closingDate.getTime() - now.getTime();
    const diff = formatDiff(diffMs);
    return `Cierra en ${diff}`;
  } else {
    return "Ya cerró";
  }
}

function formatDiff(ms: number) {
  const seconds = Math.floor((ms / 1000) % 60);
  const minutes = Math.floor((ms / 1000 / 60) % 60);
  const hours = Math.floor(ms / 1000 / 60 / 60);
  return `${hours}h ${minutes}m`;
}

export function CalendarCard({ cardData }: cardDataProps) {
  const event = cardData;
  const eventDate = event?.start?.date;
  const [statusMessage, setStatusMessage] = useState("");

  useEffect(() => {
    if (!eventDate) return;

    const updateMessage = () => {
      const msg = getStatusMessage(eventDate);
      setStatusMessage(msg);
    };

    updateMessage(); // inicial
    const interval = setInterval(updateMessage, 1000); // actualiza cada segundo

    return () => clearInterval(interval); // cleanup
  }, [eventDate]);

  return (
    <Card className="mt-6 w-96">
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {event?.pharmacy?.name}
        </Typography>
        <Typography>Fecha: {eventDate}</Typography>
        <Typography className="mt-2 text-sm text-gray-700">
          {statusMessage}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>Ver más</Button>
      </CardFooter>
    </Card>
  );
}
