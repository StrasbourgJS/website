export const isUserInAcceptedOrg = async (userSlug: string) => {
  const members = await fetch(
    `https://api.github.com/orgs/StrasbourgJS/members`,
    {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    }
  ).then((res) => res.json());

  return Boolean(members.find((member: any) => member.login === userSlug));
};
