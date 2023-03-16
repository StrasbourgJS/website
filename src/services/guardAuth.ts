import { supabase } from "../supabase-server";
import { isUserInAcceptedOrg } from "./isUserInAcceptedOrg";

export const guardAuth = async (cookies: any) => {
  const refreshToken = cookies["my-refresh-token"];
  const accessToken = cookies["my-access-token"];

  if (refreshToken && accessToken) {
    await supabase.auth.setSession({
      refresh_token: refreshToken,
      access_token: accessToken,
    });

    const user = await supabase.auth.getUser();

    if (!user) {
      return null;
    }

    if (!(await isUserInAcceptedOrg(user.data.user?.user_metadata.user_name))) {
      return null;
    }

    return supabase.auth.getUser();
  }

  return null;
};
