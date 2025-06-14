"use client";

//data
import { pharmaciesByName } from "@/data/pharmacies";
import { Event } from "@/types/event";

// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";

import { useEffect, useState } from "react";

export default function Home() {
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch("/api/events")
      .then((res) => res.json())
      .then((data) => {
        if (data.items) setEvents(data.items);
      });
  }, []);

  const getDate = (offset: number) => {
    const now = new Date();
    // Hora de referencia en Argentina
    const buenosAiresTime = new Date(
      now.toLocaleString("en-US", {
        timeZone: "America/Argentina/Buenos_Aires",
      }),
    );
    // Si son antes de las 8:30 AM, restamos 1 día para el current
    if (
      offset === 0 &&
      (buenosAiresTime.getHours() < 8 ||
        (buenosAiresTime.getHours() === 8 && buenosAiresTime.getMinutes() < 30))
    ) {
      console.log("Ajustando fecha a ayer");
      buenosAiresTime.setDate(buenosAiresTime.getDate() - 1);
    } else {
      console.log("hoy");
      buenosAiresTime.setDate(buenosAiresTime.getDate() + offset);
    }
    const yyyy = buenosAiresTime.getFullYear();
    const mm = String(buenosAiresTime.getMonth() + 1).padStart(2, "0");
    const dd = String(buenosAiresTime.getDate()).padStart(2, "0");
    const localDate = `${yyyy}-${mm}-${dd}`;
    return localDate;
  };

  const findEventByDate = (date: string): Event | undefined => {
    console.log("Buscando evento para la fecha:", date);
    const event = events.find((e) => e.start.date === date);
    if (!event) return undefined;
    const pharmacy = pharmaciesByName[event.summary.toLowerCase()];
    return {
      ...event,
      pharmacy,
    };
  };

  // const previous = findEventByDate(getDate(-1));
  const current = findEventByDate(getDate(0));
  // const next = findEventByDate(getDate(1));
  // const eventsSinceYesterday = Array.from({ length: 7 }, (_, i) =>
  //   findEventByDate(getDate(i - 1)),
  // );
  // const EventCard = ({ label, event }: { label: string; event?: Event }) => (
  //   <div className="dark:bg-neutral-900 w-full max-w-md rounded-xl border bg-white p-4 shadow">
  //     <h2 className="text-sm text-gray-500 dark:text-gray-400">{label}</h2>
  //     <p className="mt-1 text-lg font-medium text-gray-800 dark:text-white">
  //       {event?.summary || "Sin evento"}
  //     </p>
  //   </div>
  // );
  return (
    <>
      <Navbar />
      <Hero event={current} />
      {/* <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
      <TrustedCompany />
      <EventCard label="Ayer" event={previous} />
      <EventCard label="Hoy" event={current} />
      <EventCard label="Mañana" event={next} /> */}
      {/* <div>
        <h1 className="mb-8 text-center text-2xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Calendario de Farmacias de Turno
        </h1>
        <div className="aspect-[4/3] w-full max-w-4xl sm:aspect-[16/9]">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=cf11ee6c6388b89b4686ee72a3692f5eb2053118aa1d147f52371b20b970496f%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
          />
        </div>
      </div> */}
      {/* <DateCarousel cardsData={eventsSinceYesterday} /> */}
      <Footer />
    </>
  );
}
