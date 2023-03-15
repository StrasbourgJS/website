import marked from "./marked";

export const getMileStoneByEventId = async (milestoneNumber: string) => {
  const issues = await fetch(
    `https://api.github.com/repos/StrasbourgJs/talks/issues?milestone=${milestoneNumber}&state=all`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  return (issues || []).map(transformIssue);
};

function transformIssue(issue: any) {
  const rawBody = (issue.body as string).replace(
    // Only keep content
    /.*### Contenu(.*)### Durée.*/gms,
    "$1"
  );
  // TODO: add extracting of level and talk duration
  const body = marked(rawBody);

  return {
    ...issue,
    body,
  };
}
