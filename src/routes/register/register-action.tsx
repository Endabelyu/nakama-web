import { auth } from "@/lib/auth";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const userRegister = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
    name: String(formData.get("name")),
    confirmPassword: String(formData.get("confirmPassword")),
    address: String(formData.get("address")),
    phone: String(formData.get("phone")),
  };

  const result = await auth.register(userRegister);
  if (result && result.ok) {
    return redirect("/login");
  }
  console.log(result, "result");
  if (!result) return null;
};
