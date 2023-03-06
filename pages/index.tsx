import Head from "next/head";
import { Hero } from "@/src/components/Hero";
import { NextMeetup } from "@/src/components/Highlight";
import { IconGrid } from "@/src/components/IconGrid/IconGrid";
import { Logo } from "@/src/components/Logo";
import { NavBar } from "@/src/components/NavBar";
import { Place } from "@/src/components/Place";
import { PreviousTalks } from "@/src/components/PreviousTalks";
import { FaMeetup } from "react-icons/fa";
import { getMeetups } from "@/src/services/getMeetups";
import { Event } from "@/src/services/types";
import { getMileStoneByEventId } from "@/src/services/getMileStoneByEventId";
import { GithubIssue } from "@/src/components/GithubIssue";

export async function getStaticProps() {
  const { nextEvent, pastEvents } = await getMeetups();
  const issues = await getMileStoneByEventId(nextEvent.id);

  return {
    props: {
      nextEvent,
      pastEvents,
      issues,
    }, // will be passed to the page component as props
  };
}

interface HomeProps {
  nextEvent: Event;
  pastEvents: Array<Event>;
  issues: Array<any>;
}

export default function Home({ nextEvent, pastEvents, issues }: HomeProps) {
  return (
    <>
      <Head>
        <title>Strasbourg JS</title>
        <meta
          name="description"
          content="La Communauté #JavaScript de Strasbourg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full overflow-hidden">
        <NavBar />
        <Hero>
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
        </Hero>

        <div className="bg-gray-50">
          <PreviousTalks talks={pastEvents} />
        </div>
      </main>
    </>
  );
}
