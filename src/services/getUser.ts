export const getUser = (token: string) => {
  return fetch(`https://api.github.com/user`, {
    headers: { Authorization: `Bearer ${token}` },
  }).then((res) => res.json());
};
