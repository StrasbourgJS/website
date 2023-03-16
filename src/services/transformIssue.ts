import marked from "./marked";

export function transformIssue(issue: any) {
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
