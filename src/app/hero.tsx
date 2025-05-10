"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { Pharmacy } from "@/types/pharmacy"; // Importá el tipo si lo necesitás
import { Event } from "@/types/event";
import LocationMap from "@/components/location-map";
import { DefaultSkeleton } from "@/components/defaultSkeleton";

type HeroProps = {
  event?: Event;
};

function Hero({ event }: HeroProps) {
  const title = event?.pharmacy?.name || event?.summary;
  const address = event?.pharmacy?.address || event?.location;
  const encodedAddress = encodeURIComponent(address);
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/patron_verde.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto h-[780px] w-[920px] rounded-bl-[100px] object-cover object-center opacity-[0.60]"
      />
      <div className="container mx-auto mt-[22rem] lg:mt-[16rem]">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 p-8 py-10 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="text-3xl !leading-snug lg:max-w-3xl lg:text-5xl"
            >
              Farmacia <span className="whitespace-nowrap">{title}</span>
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              <i className="fa fa-map-marker pr-2" aria-hidden="true" />
              {address?.split(",").map((part, idx, arr) => (
                <span key={idx}>
                  {part.trim()}
                  {idx < arr.length - 1 && (
                    <>
                      ,<wbr />
                    </>
                  )}
                </span>
              ))}
            </Typography>

            {address ? (
              <LocationMap address={address} />
            ) : (
              <DefaultSkeleton className="mb-10" />
            )}

            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <a href={mapsLink} target="_blank" rel="noopener noreferrer">
                <Button color="gray">Como llegar</Button>
              </a>
              <Button color="gray" variant="outlined">
                <i className="fa-brands fa-whatsapp fa-1x" /> whatsapp
              </Button>
              <Button color="gray" variant="outlined">
                <i className="fa-solid fa-phone fa-1x"></i> llamar
              </Button>
            </div>
            <div className="grid grid-cols-2 items-center justify-between gap-4 lg:grid-cols-4 lg:justify-start">
              <Image
                width={144}
                height={144}
                className="w-36 opacity-60 grayscale"
                src="/logos/logo-pinterest.svg"
                alt="pinterest"
              />
              <Image
                width={144}
                height={144}
                className="w-36 opacity-60 grayscale"
                src="/logos/logo-netflix.svg"
                alt="netflix"
              />
              <Image
                width={144}
                height={144}
                className="w-36 opacity-60 grayscale"
                src="/logos/logo-coinbase.svg"
                alt="coinbase"
              />
              <Image
                width={144}
                height={144}
                className="w-36 opacity-60 grayscale"
                src="/logos/logo-google.svg"
                alt="google"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
