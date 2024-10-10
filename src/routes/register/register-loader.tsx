import { auth } from "@/lib/auth";
import { redirect } from "react-router-dom";

export async function registerLoader() {
  const user = await auth.checkUser();
  if (user) return redirect("/");
  return null;
}
