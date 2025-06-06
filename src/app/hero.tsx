"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";
import { Event } from "@/types/event";
import LocationMap from "@/components/location-map";
import { DefaultSkeleton } from "@/components/defaultSkeleton";

type HeroProps = {
  event?: Event;
};

const pharmacyImgLists = [
  ["lidherma", "konjac", "maybelline"],
  ["argentina", "giraldi", "dibernardi"],
];

function Hero({ event }: HeroProps) {
  const title = event?.pharmacy?.name || event?.summary;
  const pharmacyList = title === "argentina" ? 0 : 1;
  const address = event?.pharmacy?.address || event?.location;
  const googlePlaceLink = event?.pharmacy?.googlePlaceLink;
  const googleMapSrc = event?.pharmacy?.googleMapSrc;
  const whatsapp = `https://api.whatsapp.com/send?phone=${event?.pharmacy?.whatsapp}`;
  const tel = `tel:+549${event?.pharmacy?.tel}`;

  return (
    <div className="mb-[500px] !flex h-[55vh] w-full items-center justify-between px-10 md:mb-[300px]">
      <picture>
        <source media="(min-width: 1024px)" srcSet="/image/patron_verde.webp" />

        <img
          src="/image/patron_baja_opacidad.webp"
          alt="bg-img"
          className="absolute inset-0 ml-auto h-[780px] w-[920px] rounded-bl-[100px] object-cover object-center opacity-[0.60]"
          loading="lazy"
        />
      </picture>
      <div className="container mx-auto mt-[600px] md:mt-[17rem]">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 p-8 py-10 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-6">
            {address && address.trim() !== "" ? (
              <>
                <Typography
                  variant="h1"
                  color="blue-gray"
                  className="text-3xl !leading-snug lg:max-w-3xl lg:text-5xl"
                >
                  Farmacia{" "}
                  <span className="whitespace-nowrap uppercase">{title}</span>
                </Typography>
                <Typography variant="lead" className="mb-1 mt-6 !text-gray-900">
                  <i className="fa fa-map-marker pr-2" aria-hidden="true" />
                  {`${address.split(",")[0]}, `}
                  <br className="block sm:hidden" />
                  {address.split(",")[1]}
                </Typography>

                {googleMapSrc ? (
                  <LocationMap googleMapSrc={googleMapSrc} addressCode={""} />
                ) : (
                  <DefaultSkeleton className="mb-10" />
                )}

                <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-col md:flex-row lg:justify-start">
                  <a
                    href={googlePlaceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button color="gray" className="w-full md:w-auto">
                      Como llegar
                    </Button>
                  </a>
                  <a
                    href={whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      color="gray"
                      variant="outlined"
                      className="w-full md:w-auto"
                    >
                      <i className="fa-brands fa-whatsapp fa-1x mr-2" />{" "}
                      whatsapp
                    </Button>
                  </a>
                  <a
                    href={tel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full md:w-auto"
                  >
                    <Button
                      color="gray"
                      variant="outlined"
                      className="w-full md:w-auto"
                    >
                      <i className="fa-solid fa-phone fa-1x mr-2"></i> llamar
                    </Button>
                  </a>
                </div>

                <div className="grid grid-cols-2 items-center justify-items-center gap-4 lg:grid-cols-3 lg:justify-start">
                  {pharmacyImgLists[pharmacyList].map((element, index) => (
                    <Image
                      key={index}
                      width={144}
                      height={144}
                      className="w-36 opacity-60 grayscale"
                      src={`/logos/${element}.png`}
                      alt={element}
                    />
                  ))}
                </div>
              </>
            ) : (
              <DefaultSkeleton className="mb-10" />
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
