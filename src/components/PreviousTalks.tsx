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
      className="drop-shadow-md p-6 rounded-lg bg-white flex flex-col md:flex-row gap-8 items-center cursor-pointer hover:bg-gray-50 active:bg-gray-100"
      tabIndex={-1}
      onClick={() => linkRef?.current?.click()}
    >
      <img
        height="160px"
        width="284px"
        src={talk.imageUrl}
        alt={talk.title}
        className="rounded h-40"
      />
      <div>
        <h3>
          <a
            ref={linkRef}
            href={talk.eventUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-lg"
          >
            {talk.title}
          </a>
        </h3>
        <time
          dateTime={talk.dateTime}
          className="text-gray-600 h-6 inline-block"
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
      id="previous-talks"
      className="max-w-5xl mx-auto px-4 w-full py-20"
    >
      <h2 id="previous-talks" className="text-3xl font-bold pb-6">
        Talks precedents
      </h2>

      <div className="flex flex-col gap-4">
        {talks.map((talk) => (
          <Talk key={talk.dateTime} talk={talk} />
        ))}
      </div>
    </section>
  );
};
