export const tradeCodeForToken = async (code: string) => {
  const body = JSON.stringify({
    client_id: process.env.GITHUB_CLIENT_ID,
    client_secret: process.env.GITHUB_CLIENT_SECRET,
    redirect_uri: process.env.GITHUB_REDIRECT_URI,
    code,
  });

  const res = await fetch(`https://github.com/login/oauth/access_token`, {
    method: "POST",
    body,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

  return { accessToken: res.access_token, tokenType: res.token_type };
};
