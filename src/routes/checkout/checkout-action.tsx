import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";
import { Toast } from "@/lib/toast";
import { CartItem } from "@/types";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function checkoutAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const cartId = formData.get("cartId");

  const token = auth.getToken();
  if (!token) return redirect("/login");

  const response = await fetch(`${BACKEND_API_URL}/orders/payment/${cartId}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const result = await response.json();
  if (!result.ok) {
    Toast.fire({
      icon: "error",
      title: "Payment product failed",
    });
    console.error("Select all unsuccessful");
    return redirect("/checkout");
  }
  Toast.fire({
    icon: "success",
    title: "Payment product successfully",
  });

  return redirect("/order/success");
}
