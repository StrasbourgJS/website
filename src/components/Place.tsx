import type { Event } from "../services/types";

export interface PlaceProps {
  venue: Event["venue"];
}

export const Place = ({ venue }: PlaceProps) => {
  const googlemapLink = `https://maps.google.com/?q=${venue.lat},${venue.lng}`;

  return (
    <a
      href={googlemapLink}
      target="_blank"
      rel="noopener noreferrer"
      className="font-bold leading-relaxed underline"
    >
      {venue.name}
    </a>
  );
};
