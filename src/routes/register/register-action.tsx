import { auth } from "@/lib/auth";
import { UserRegisterSchema } from "@/schemas/user";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export const registerAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();
  const userRegister = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
    name: String(formData.get("name")),
    confirmPassword: String(formData.get("confirmPassword")),
    address: formData.get("address")
      ? String(formData.get("address"))
      : undefined,
    phone: formData.get("phone") ? String(formData.get("phone")) : undefined,
  };
  const validationResult = UserRegisterSchema.safeParse(userRegister);

  if (!validationResult.success) {
    const errors = validationResult.error.errors.reduce(
      (acc, error) => ({
        ...acc,
        [error.path[0]]: error.message,
      }),
      {},
    );
    return { errors };
  }
  const result = await auth.register(userRegister);
  if (result && result.ok) {
    return redirect("/login");
  }
  if (!result) return null;
};
