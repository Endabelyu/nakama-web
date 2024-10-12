import { auth } from "@/lib/auth";
import { redirect } from "react-router-dom";

export const profileAction = async () => {
  auth.logout();
  return redirect("/login");
};
