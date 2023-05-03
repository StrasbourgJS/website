import { GithubIssue } from "../GithubIssue";
import { NextMeetup } from "../NextMeetup";
import { IconGrid } from "../IconGrid/IconGrid";
import { Logo } from "../Logo";
import { Place } from "../Place";
import { Event } from "@/src/services/types";
import { MeetupButton } from "../MeetupButton";
import Link from "next/link";
import { SponsorCard } from "../Sponsors/SponsorCard";
import { NuxtLabs } from "../Sponsors/logos/NuxtLabs";
import { TwitchButton } from "../TwitchButton";
import Image from "next/image";

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

        <span className="text-center md:text-left font-mono leading-relaxed text-white md:text-3xl">
          Prochain meet-up le{" "}
          <strong>
            <NextMeetup time={nextEvent.dateTime} />
          </strong>{" "}
          {nextEvent.venue && (
            <>
              {" "}
              à<br />
              <Place venue={nextEvent.venue} />
            </>
          )}
        </span>

        <div className="h-4" />

        <div className="flex flex-col md:flex-row gap-4">
          <MeetupButton href={nextEvent.eventUrl}>Je participe</MeetupButton>
          <TwitchButton href={"https://www.twitch.tv/strasbourgjs"}>
            Voir sur Twitch
          </TwitchButton>
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

        <div className="grid grid-cols-1 md:grid-cols-4 pt-10 gap-4">
          <SponsorCard
            url={"https://nuxtlabs.com/"}
            img={<NuxtLabs className="text-white h-10 w-auto" />}
          >
            NuxtLabs
          </SponsorCard>

          <SponsorCard
            url={"https://vercel.com?utm_source=StrasbourgJs&utm_campaign=oss"}
            img={
              <Image
                width={212}
                height={44}
                src={
                  "https://images.ctfassets.net/e5382hct74si/78Olo8EZRdUlcDUFQvnzG7/fa4cdb6dc04c40fceac194134788a0e2/1618983297-powered-by-vercel.svg"
                }
                alt="Vercel"
              />
            }
          >
            Vercel
          </SponsorCard>
        </div>
      </section>
    </>
  );
};
