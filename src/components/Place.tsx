import type { Event } from "../services/types";
import { FiMapPin } from "react-icons/fi";

export interface PlaceProps {
  venue: Event["venue"];
}

export const Place = ({ venue }: PlaceProps) => {
  const googlemapLink = `https://maps.google.com/?q=${venue.lat},${venue.lng}`;

  return (
    <div className="font-mono leading-relaxed text-white md:text-3xl">
      Prochain meet-up à{" "}
      <a
        href={googlemapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block font-bold leading-relaxed underline"
      >
        {venue.name}
        <br /> {venue.address}
        <FiMapPin aria-hidden className="inline ml-2" />
      </a>
    </div>
  );
};
