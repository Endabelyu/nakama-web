import { auth } from "@/lib/auth";

export async function RootLoader() {
  try {
    const user = await auth.checkUser();
    return {
      user: user,
    };
  } catch (error) {
    console.error(error, "error");
    return {
      users: null,
    };
  }
}
