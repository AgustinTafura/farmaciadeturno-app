'use client';
import { useState, useEffect } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

export default function CarouselCards() {
  const [index, setIndex] = useState(0);

  // Generar 7 fechas desde ayer
  const today = new Date();
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() + i - 1); // Desde ayer
    return date;
  });

  const handlePrev = () => setIndex((prev) => (prev === 0 ? dates.length - 1 : prev - 1));
  const handleNext = () => setIndex((prev) => (prev === dates.length - 1 ? 0 : prev + 1));

  return (
    <div className="relative mx-auto max-w-4xl px-4 py-6">
      <div className="flex items-center justify-between mb-4">
        <button onClick={handlePrev}>
          <ChevronLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
        <Typography variant="h5" className="text-center w-full text-gray-800 font-bold">
          Carrusel de Fechas
        </Typography>
        <button onClick={handleNext}>
          <ChevronRightIcon className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 overflow-x-auto">
        {dates.map((date, i) => (
          <Card
            key={i}
            className={`p-6 transition-all duration-300 ${
              i === index ? 'bg-blue-100 scale-105' : 'bg-white'
            }`}
          >
            <Typography variant="h6" className="text-blue-gray-800">
              {date.toLocaleDateString('es-AR', { weekday: 'long', day: 'numeric', month: 'long' })}
            </Typography>
            <Typography variant="paragraph" className="text-sm text-gray-700 mt-2">
              hola
            </Typography>
          </Card>
        ))}
      </div>
    </div>
  );
}
