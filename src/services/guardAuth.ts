import { getUser } from "./getUser";
import { isUserInAcceptedOrg } from "./isUserInAcceptedOrg";

export const guardAuth = async (cookies: any) => {
  const accessToken = cookies["accessToken"];

  if (accessToken) {
    const user = await getUser(accessToken);

    if (!user) {
      return null;
    }

    if (!(await isUserInAcceptedOrg(user.login))) {
      return null;
    }

    return user;
  }

  return null;
};
