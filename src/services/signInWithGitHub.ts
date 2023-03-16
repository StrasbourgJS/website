import { supabase } from "../supabase-client";

export async function signInWithGitHub() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${window.location.origin}/admin`,
    },
  });

  return { data, error };
}