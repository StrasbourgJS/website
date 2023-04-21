import Head from "next/head";
import { NavBar } from "@/src/components/NavBar";
import { PreviousTalks } from "@/src/components/PreviousTalks";
import { getMeetups } from "@/src/services/getMeetups";
import { Event } from "@/src/services/types";

export async function getStaticProps() {
  const { pastEvents } = await getMeetups();

  return {
    props: {
      pastEvents,
    },
  };
}

interface HomeProps {
  pastEvents: Array<Event>;
}

export default function Home({ pastEvents }: HomeProps) {
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

        <div className="bg-gray-50">
          <PreviousTalks talks={pastEvents} />
        </div>
      </main>
    </>
  );
}
