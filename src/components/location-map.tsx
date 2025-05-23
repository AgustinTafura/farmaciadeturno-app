type LocationMapProps = {
  addressCode: string;
  googleMapSrc: string;
};

function LocationMap({ addressCode, googleMapSrc }: LocationMapProps) {
  const encodedAddress = encodeURIComponent(addressCode);
  const mapSrc = googleMapSrc || `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className="w-full md:w-1/2 xl:w-[60%] mx-auto lg:mx-0 mb-10 overflow-hidden rounded-xl shadow-lg">
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
