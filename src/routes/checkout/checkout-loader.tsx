import { auth } from "@/lib/auth";
import { redirect } from "react-router-dom";

export const checkoutLoader = async () => {
  try {
    const user = await auth.checkUser();
    if (!user) return redirect("/login");
    const { totalPrice, selectedItems } = JSON.parse(
      localStorage.getItem("checkoutItems")!,
    );

    return { user, selectedItems, totalPrice };
  } catch (error) {
    console.error(error);
    return null;
  }
};
