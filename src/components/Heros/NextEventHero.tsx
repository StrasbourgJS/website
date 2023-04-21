import { GithubIssue } from "../GithubIssue";
import { NextMeetup } from "../Highlight";
import { IconGrid } from "../IconGrid/IconGrid";
import { Logo } from "../Logo";
import { Place } from "../Place";
import { Event } from "@/src/services/types";
import { MeetupButton } from "../MeetupButton";
import Link from "next/link";

export interface NextEventHeroProps {
  nextEvent: Event;
  issues: Array<any>;
}

export const NextEventHero = ({ nextEvent, issues }: NextEventHeroProps) => {
  return (
    <>
      <div className="flex flex-col w-full text-white py-12 md:py-32">
        <div className="flex justify-center md:justify-start">
          <Logo className="h-10 mb-4 md:h-auto w-auto" />
        </div>

        <Place venue={nextEvent.venue} />

        <div className="h-4" />

        <div className="flex flex-col md:flex-row gap-4">
          <NextMeetup time={nextEvent.dateTime} />
          <MeetupButton href={nextEvent.eventUrl}>Je participe</MeetupButton>
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-mono pb-4">
          Au programme
        </h2>

        <div className="h-1 w-[120px] bg-white" />
        <div className="pt-6">
          {issues?.map((issue) => (
            <div
              key={issue.id}
              className="p-6 mt-4 bg-black bg-opacity-10 rounded-lg"
            >
              <GithubIssue issue={issue} />
            </div>
          ))}
        </div>

        <div className="text-center pt-6">
          <Link
            href="/previous-talks"
            className="text-white px-10 py-4font-bold"
          >
            Voir les talks précédents
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white font-mono pb-4">
          Sponsoring
        </h2>

        <div className="h-1 w-[120px] bg-white" />

        <p className="pt-6 text-slate-100 text-lg md:w-3/5">
          Vous souhaitez avoir votre nom dans la liste et présenter votre
          organisation en début de Meetup ? Envoyez nous un petit message !
        </p>
      </section>
    </>
  );
};
