"use client";

import Slider from "react-slick";
import { Typography } from "@material-tailwind/react";
import { Event } from "@/types/event";
import { CalendarCard } from "./calendar-card";

type DateCarouselProps = {
  cardsData: Event[];
};
export default function DateCarousel({ cardsData }: DateCarouselProps) {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    initialSlide: 1,
  };

  return (
    <>
      <div className="slider-container px-8 py-8">
        <Typography
          variant="h5"
          className="mb-4 text-center font-bold text-gray-800"
        >
          Carrusel de Fechas
        </Typography>
        <Slider {...settings}>
          {cardsData.map((cardData, index) => (
            <div key={index} className="px-2">
              <CalendarCard cardData={cardData} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
