import { auth } from "@/lib/auth";
import { UserLoginSchema } from "@/schemas/user";
import { ActionFunctionArgs, redirect } from "react-router-dom";
export interface ActionData {
  errors?: Record<string, string>;
  success?: boolean;
}
export const loginAction = async ({ request }: ActionFunctionArgs) => {
  const formData = await request.formData();

  const userLogin = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  };

  const validationResult = UserLoginSchema.safeParse(userLogin);

  if (!validationResult.success) {
    // Collect and return errors to the form page
    const errors = validationResult.error.errors.reduce(
      (acc, error) => ({
        ...acc,
        [error.path[0]]: error.message,
      }),
      {},
    );
    return { errors };
  }
  const result = await auth.login(userLogin);

  if (!result) return null;

  return redirect("/");
};
