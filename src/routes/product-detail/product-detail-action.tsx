import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";
import { Toast } from "@/lib/toast";
import { CartResponse } from "@/types";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function productDetailAction({ request }: ActionFunctionArgs) {
  const token = auth.getToken();
  if (!token) return null;

  const formData = await request.formData();

  const addToCartData = {
    productId: formData.get("productId"),
    quantity: Number(formData.get("quantity")),
  };

  const response = await fetch(`${BACKEND_API_URL}/carts/items`, {
    method: "POST",
    body: JSON.stringify(addToCartData),
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  const addToCartResponse: CartResponse = await response.json();

  if (!addToCartResponse.ok) {
    Toast.fire({
      icon: "error",
      title: "Add product to cart failed",
    });
    return null;
  }
  Toast.fire({
    icon: "success",
    title: "Add product to cart successfully",
  });
  if (!addToCartResponse) return null;
  return redirect("/cart");
}
