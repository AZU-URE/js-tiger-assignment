import { LocationType } from "@/types/types";
import GoogleMapReact from "google-map-react";
export default function MapComp(el: LocationType[]) {
  const center = {
    lat: 10.99835602,
    lng: 77.01502627,
  };

  return (
    <div className="h-full w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={center}
        defaultZoom={17}
      >
        {el.map((location) => (
          <LocationPin {...location} />
        ))}
      </GoogleMapReact>
    </div>
  );
}

function LocationPin(prop: { location: string }) {
  return <div>{prop.location}</div>;
}
