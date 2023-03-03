import { marked } from "marked";

export const getMileStoneByEventId = async (eventId: string) => {
  const endpoint = `https://api.github.com/repos/StrasbourgJS/talks/milestones`;
  const data = await fetch(endpoint).then((res) => res.json());

  const milestone = (data || []).find((d: any) =>
    d.description.includes(`/events/${eventId}`)
  );

  const issues = await fetch(
    `https://api.github.com/repos/StrasbourgJs/talks/issues?milestone=${milestone.number}&state=all`
  ).then((res) => res.json());

  return (issues || []).map((issue: any) => ({
    ...issue,
    body: marked(issue.body),
  }));
};
