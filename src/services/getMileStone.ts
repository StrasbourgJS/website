export const getMileStone = async (eventId: string) => {
  const endpoint = `https://api.github.com/repos/StrasbourgJS/talks/milestones`;
  const data = await fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());

  const milestone = data.find((d: any) =>
    d.description.includes(`/events/${eventId}`)
  );

  return milestone;
};
