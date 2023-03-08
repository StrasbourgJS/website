import { marked } from "marked";
import { gql, GraphQLClient } from "graphql-request";
import type { Event } from "./types";

const client = new GraphQLClient("https://www.meetup.com/gql");
const query = gql`
  query meetupEvents($id: ID!) {
    group(id: $id) {
      id
      name
      pastEvents(input: { first: 5000 }) {
        edges {
          node {
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
      upcomingEvents(input: {}) {
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
  nextEvent: Event;
  pastEvents: Array<Event>;
}> => {
  const meetupEventsResponse = await client.request<ResponseType>(query, {
    id: 16222542,
  });
  const nextEvent =
    meetupEventsResponse?.group?.upcomingEvents?.edges?.[0]?.node || null;

  const renderer = new marked.Renderer();
  renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;
  marked.setOptions({ renderer });
  nextEvent.description = marked(nextEvent.description);

  const pastEvents =
    meetupEventsResponse?.group?.pastEvents?.edges
      .map((it) => it.node)
      .reverse() || [];

  return { nextEvent, pastEvents };
};
