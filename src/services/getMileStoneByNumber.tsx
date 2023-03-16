export const getMileStoneByNumber = async (number: number) => {
  const endpoint = `https://api.github.com/repos/StrasbourgJS/talks/milestones/${number}`;
  return fetch(endpoint, {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  }).then((res) => res.json());
};
