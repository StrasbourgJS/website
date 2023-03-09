import { useEffect, useRef, useState } from "react";
import type { Event } from "../services/types";

export interface TalkProps {
  talk: Event;
}

const Talk = ({ talk }: TalkProps) => {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [formatted, setFormatted] = useState<string>();

  useEffect(() => {
    setFormatted(
      new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "full",
        timeStyle: "medium",
      }).format(new Date(talk.dateTime))
    );
  }, [talk.dateTime]);

  return (
    <div
      className="flex flex-col items-center gap-8 p-6 bg-white rounded-lg cursor-pointer drop-shadow-md md:flex-row hover:bg-gray-50 active:bg-gray-100"
      tabIndex={-1}
      onClick={() => linkRef?.current?.click()}
    >
      <img
        height="160px"
        width="284px"
        src={talk.imageUrl}
        alt={talk.title}
        className="h-40 rounded"
      />
      <div>
        <h3>
          <a
            ref={linkRef}
            href={talk.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg font-bold"
          >
            {talk.title}
          </a>
        </h3>
        <time
          dateTime={talk.dateTime}
          className="inline-block h-6 text-gray-600"
        >
          {formatted}
        </time>
      </div>
    </div>
  );
};

export interface PreviousTalksProps {
  talks: Array<Event>;
}

export const PreviousTalks = ({ talks }: PreviousTalksProps) => {
  return (
    <section
      aria-labelledby="previous-talks"
      className="w-full max-w-5xl px-4 py-20 mx-auto"
    >
      <h2 id="previous-talks" className="pb-6 text-3xl font-bold">
        Talks précédents
      </h2>

      <div className="flex flex-col gap-4">
        {talks.map((talk) => (
          <Talk key={talk.dateTime} talk={talk} />
        ))}
      </div>
    </section>
  );
};
