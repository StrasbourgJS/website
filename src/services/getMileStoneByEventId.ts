import { marked } from "marked";

export const getMileStoneByEventId = async (eventId: string) => {
  const endpoint = `https://api.github.com/repos/StrasbourgJS/talks/milestones`;
  const data = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());

  const milestone = data.find((d: any) =>
    d.description.includes(`/events/${eventId}`)
  );

  const issues = await fetch(
    `https://api.github.com/repos/StrasbourgJs/talks/issues?milestone=${milestone.number}&state=all`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  const renderer = new marked.Renderer();
  renderer.heading = (text, level) => `<h${level}>${text}</h${level}>`;
  marked.setOptions({ renderer });

  return (issues || []).map((issue: any) => ({
    ...issue,
    body: marked(issue.body),
  }));
};
