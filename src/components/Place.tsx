import type { Event } from "../services/types";

export interface PlaceProps {
  venue: Event["venue"];
}

export const Place = ({ venue }: PlaceProps) => {
  const googlemapLink = `https://maps.google.com/?q=${venue.lat},${venue.lng}`;

  return (
    <span className="text-center md:text-left font-mono leading-relaxed text-white md:text-3xl">
      Prochain meet-up à{" "}
      <a
        href={googlemapLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-bold leading-relaxed underline"
      >
        {venue.name} {venue.address}{" "}
      </a>
    </span>
  );
};
