import { auth } from "@/lib/auth";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userLogin = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const result = await auth.login(userLogin);
  if (!result) return null;

  return redirect("/");
};
