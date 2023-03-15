import Head from "next/head";
import { Hero } from "@/src/components/Hero";
import { NavBar } from "@/src/components/NavBar";
import { PreviousTalks } from "@/src/components/PreviousTalks";
import { getMeetups } from "@/src/services/getMeetups";
import { Event } from "@/src/services/types";
import { getMileStoneByEventId } from "@/src/services/getMileStoneByEventId";
import { getMileStone } from "@/src/services/getMileStone";
import { NextEventHero } from "@/src/components/Heros/NextEventHero";
import { NoEventHero } from "@/src/components/Heros/NoEventHero";

export async function getStaticProps() {
  const { nextEvent, pastEvents } = await getMeetups();

  if (!nextEvent) {
    return {
      props: {
        nextEvent: null,
        pastEvents,
        issues: [],
      },
    };
  }

  const milestone = await getMileStone(nextEvent.id);
  const issues = milestone ? await getMileStoneByEventId(milestone.number) : [];

  return {
    props: {
      nextEvent,
      pastEvents,
      issues,
    }, // will be passed to the page component as props
  };
}

interface HomeProps {
  nextEvent?: Event;
  pastEvents: Array<Event>;
  issues: Array<any>;
  dueDateString?: string;
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
        <meta property="og:title" content="StrasbourgJS" />

        <meta property="og:url" content="https://strasbourgjs.org" />
        <meta property="og:image" content="/cover.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full overflow-hidden">
        <NavBar />
        <Hero>
          {nextEvent ? (
            <NextEventHero nextEvent={nextEvent} issues={issues} />
          ) : (
            <NoEventHero />
          )}
        </Hero>

        <div className="bg-gray-50">
          <PreviousTalks talks={pastEvents} />
        </div>
      </main>
    </>
  );
}
