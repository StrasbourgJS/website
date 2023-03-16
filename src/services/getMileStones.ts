export const getMileStones = async (state: "open" | "closed" | "all") => {
  const endpoint = `https://api.github.com/repos/StrasbourgJS/talks/milestones?state=${state}`;

  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());
};
