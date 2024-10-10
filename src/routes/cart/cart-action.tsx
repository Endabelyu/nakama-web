// import { auth } from "@/lib/auth";
// import { BACKEND_API_URL } from "@/lib/env";
// import { CartResponse } from "@/types";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function cartAction({ request }: ActionFunctionArgs) {
  // const token = auth.getToken();
  // if (!token) return null;

  const formData = await request.formData();
  console.log(formData.get("triggeredBy"), "trigger");
  // console.log(
  //   formData.get("productId"),
  //   Number(formData.get("quantity")),
  //   "testtt",
  // );
  // const addToCartData = {
  //   productId: formData.get("productId"),
  //   quantity: Number(formData.get("quantity")),
  // };

  // const response = await fetch(`${BACKEND_API_URL}/carts/items`, {
  //   method: "POST",
  //   body: JSON.stringify(addToCartData),
  //   headers: {
  //     Authorization: `Bearer ${token}`,
  //     "Content-Type": "application/json",
  //   },
  // });

  // const addToCartResponse: CartResponse = await response.json();

  // if (!addToCartResponse.ok) return null;
  // if (!addToCartResponse) return null;
  return redirect("/cart");
}
