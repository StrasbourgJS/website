import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://hbffpvolyfiubsuhxaqo.supabase.co";
const supabasePublicAnon =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhiZmZwdm9seWZpdWJzdWh4YXFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzg4ODIwNzIsImV4cCI6MTk5NDQ1ODA3Mn0.OkuUIeM-0GNj0dYt00MTQLx5gf8e0VMZRy96WsdY-So";

export const supabase = createClient(supabaseUrl, supabasePublicAnon);

supabase.auth.onAuthStateChange((event, session) => {
  if (event === "SIGNED_OUT" || event === "USER_DELETED") {
    // delete cookies on sign out
    const expires = new Date(0).toUTCString();
    document.cookie = `my-access-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
    document.cookie = `my-refresh-token=; path=/; expires=${expires}; SameSite=Lax; secure`;
  } else if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
    const maxAge = 100 * 365 * 24 * 60 * 60; // 100 years, never expires
    document.cookie = `my-access-token=${session?.access_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
    document.cookie = `my-refresh-token=${session?.refresh_token}; path=/; max-age=${maxAge}; SameSite=Lax; secure`;
  }
});
