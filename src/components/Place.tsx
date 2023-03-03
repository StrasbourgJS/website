import type { Event } from "../services/types";
import { FiMapPin } from "react-icons/fi";

export interface PlaceProps {
  venue: Event["venue"];
}

export const Place = ({ venue }: PlaceProps) => {
  const googlemapLink = `https://maps.google.com/?q=${venue.lat},${venue.lng}`;

  return (
    <div className="text-white md:text-3xl font-mono leading-relaxed">
      Prochain meetup a{" "}
      <a
        href={googlemapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block font-bold underline leading-relaxed"
      >
        {venue.name}, {venue.address}
        <FiMapPin aria-hidden className="text-red-500 inline ml-2" />
      </a>
    </div>
  );
};
