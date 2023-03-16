import { supabase } from "../supabase-client";

export async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `https://strasbourgjs-git-supabase-strasbourgjs.vercel.app/admin`,
    },
  });

  return { data, error };
}
