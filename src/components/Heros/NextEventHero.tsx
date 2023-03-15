import { FaMeetup } from "react-icons/fa";
import { GithubIssue } from "../GithubIssue";
import { NextMeetup } from "../Highlight";
import { IconGrid } from "../IconGrid/IconGrid";
import { Logo } from "../Logo";
import { Place } from "../Place";
import { Event } from "@/src/services/types";

export interface NextEventHeroProps {
  nextEvent: Event;
  issues: Array<any>;
}

export const NextEventHero = ({ nextEvent, issues }: NextEventHeroProps) => {
  return (
    <>
      <div className="flex flex-col items-center lg:flex-row">
        <div className="flex-1 mb-4 text-white lg:mb-0 justify-center text-center lg:justify-start lg:text-left">
          <Logo className="h-10 mb-4 md:h-auto" />

          <Place venue={nextEvent.venue} />
        </div>

        <div className="flex flex-auto text-sm md:justify-end">
          <IconGrid>
            <NextMeetup time={nextEvent.dateTime} />
          </IconGrid>
        </div>
      </div>

      <section>
        <div className="p-6 mt-12 bg-white rounded-lg drop-shadow-lg">
          <div>
            <h2 className="pb-4 text-lg font-bold text-black">
              {nextEvent.title}
            </h2>
            <a
              href={nextEvent.eventUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center gap-2 mb-4 -mt-4 text-sm underline text-primary"
            >
              <FaMeetup className="w-6 h-6 text-red-500" />
              <span>Voir sur Meetups</span>
            </a>
          </div>

          <div
            dangerouslySetInnerHTML={{ __html: nextEvent.description }}
            className="prose-sm prose prose-slate prose-p:leading-relaxed"
          />
        </div>

        {issues?.map((issue) => (
          <div
            key={issue.id}
            className="p-6 mt-4 bg-white rounded-lg drop-shadow-lg"
          >
            <GithubIssue issue={issue} />
          </div>
        ))}
      </section>
    </>
  );
};
