import { supabase } from "./supabaseClient";

export async function signUp(email, password, username) {
  const { user, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (user) {
    // Store additional user details like username
    await supabase.from("users").insert([{ id: user.id, username }]);
  }

  return { user, error };
}
