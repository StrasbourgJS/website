import { gql, GraphQLClient } from "graphql-request";

import marked from "./marked";
import type { Event } from "./types";

const client = new GraphQLClient("https://api.meetup.com/gql-ext");
const query = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      id
      name
      pastEvents: events(input: { first: 5000, status: PAST }) {
        edges {
          node {
            id
            title
            description
            eventUrl
            dateTime
            imageUrl
            venue {
              name
              address
              city
              postalCode
              lat
              lng
            }
          }
        }
      }
      upcomingEvents: events(input: { status: UPCOMING }) {
        edges {
          node {
            id
            title
            description
            eventUrl
            dateTime
            imageUrl
            venue {
              name
              address
              city
              postalCode
              lat
              lng
            }
          }
        }
      }
    }
  }
`;

type Edges<T> = {
  edges: Array<{
    node: T;
  }>;
};

type ResponseType = {
  group: {
    id: string;
    name: string;
    upcomingEvents: Edges<Event>;
    pastEvents: Edges<Event>;
  };
};

export const getMeetups = async (): Promise<{
  nextEvent: Event | null;
  pastEvents: Array<Event>;
}> => {
  const meetupEventsResponse = await client.request<ResponseType>(query, {
    id: 16222542,
  });

  const nextEvent =
    meetupEventsResponse?.group?.upcomingEvents?.edges?.[0]?.node || null;

  const pastEvents =
    meetupEventsResponse?.group?.pastEvents?.edges
      .map((it) => it.node)
      .reverse() || [];

  if (nextEvent) {
    nextEvent.description = marked(nextEvent.description);

    nextEvent.dateTime = new Intl.DateTimeFormat("fr-FR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Europe/Paris",
    }).format(new Date(nextEvent.dateTime));
  }

  return { nextEvent, pastEvents };
};
