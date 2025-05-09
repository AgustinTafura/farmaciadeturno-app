'use client';
// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import CoursesCategories from "./courses-categories";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";

import { useEffect, useState } from 'react';

type Event = {
  id: string;
  summary: string;
  start: { date?: string };
  end: { date?: string };
};



export default function Home() {

  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => {
        if (data.items) setEvents(data.items);
      });
  }, []);


  const getDate = (offset: number) => {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().split('T')[0];
  };

  const findEventByDate = (date: string) =>
    events.find((e) => e.start.date === date);

  const previous = findEventByDate(getDate(-1));
  const current = findEventByDate(getDate(0));
  const next = findEventByDate(getDate(1));

  const EventCard = ({ label, event }: { label: string; event?: Event }) => (
    <div className="border rounded-xl p-4 shadow w-full max-w-md bg-white dark:bg-neutral-900">
      <h2 className="text-sm text-gray-500 dark:text-gray-400">{label}</h2>
      <p className="text-lg font-medium mt-1 text-gray-800 dark:text-white">
        {event?.summary || 'Sin evento'}
      </p>
    </div>
  );
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <CoursesCategories />
      <ExploreCourses />
      <Testimonial />
      <Events />
      <StudentsFeedback />
      <TrustedCompany />
      <EventCard label="Ayer" event={previous} />
        <EventCard label="Hoy" event={current} />
        <EventCard label="Mañana" event={next} />
        <div>
          <h1 className="text-2xl sm:text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">
            Calendario de Farmacias de Turno
          </h1>
          <div className="w-full max-w-4xl aspect-[4/3] sm:aspect-[16/9]">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=cf11ee6c6388b89b4686ee72a3692f5eb2053118aa1d147f52371b20b970496f%40group.calendar.google.com&ctz=America%2FArgentina%2FBuenos_Aires"
                style={{ border: 0 }}
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no" />
            </div>
          </div>
          <Footer />
    </>
  );
}
