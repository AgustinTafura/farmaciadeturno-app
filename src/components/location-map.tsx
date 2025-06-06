type LocationMapProps = {
  addressCode: string;
  googleMapSrc: string;
};

function LocationMap({ addressCode, googleMapSrc }: LocationMapProps) {
  const encodedAddress = encodeURIComponent(addressCode);
  const mapSrc =
    googleMapSrc ||
    `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className="mx-auto mb-10 w-full overflow-hidden rounded-xl shadow-lg md:w-1/2 lg:mx-0 xl:w-[60%]">
      <iframe
        src={mapSrc}
        width="100%"
        height="100%"
        max-width="200px"
        max-height="200px"
        className="border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
export default LocationMap;
