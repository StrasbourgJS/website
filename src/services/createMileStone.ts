export const createMileStone = async (milestone: any) => {
  const endpoint = `https://api.github.com/repos/StrasbourgJS/talks/milestones`;

  return fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(milestone),
    headers: {
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28",
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());
};
