import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";
import { Toast } from "@/lib/toast";
import { CartItem } from "@/types";
import { ActionFunctionArgs, redirect } from "react-router-dom";

export async function cartAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();
  const action = formData.get("action");
  const itemId = formData.get("itemId");

  const token = auth.getToken();
  if (!token) return redirect("/login");

  if (action === "delete") {
    // Handle delete item
    const response = await fetch(`${BACKEND_API_URL}/carts/items/${itemId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      Toast.fire({
        icon: "error",
        title: "Delete product from cart failed",
      });
      console.error("Delete unsuccessful");
    }
    Toast.fire({
      icon: "success",
      title: "Delete product from cart successfully",
    });
  } else if (action === "update") {
    const quantity = Number(formData.get("quantity"));
    const response = await fetch(`${BACKEND_API_URL}/carts/items/${itemId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      console.error("Update unsuccessful");
    }
  } else if (action === "selectAll") {
    // Handle select all
    const cartId = formData.get("cartId");
    const allSelected = JSON.parse(formData.get("allSelected") as string);
    const response = await fetch(
      `${BACKEND_API_URL}/carts/items/selected/${cartId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ selected: allSelected }),
      },
    );

    const result = await response.json();
    if (!result.ok) {
      console.error("Select all unsuccessful");
    }
  } else if (action === "selectItem") {
    const itemId = formData.get("itemId");
    const selectedItems = JSON.parse(formData.get("selectedItems") as string);
    const response = await fetch(
      `${BACKEND_API_URL}/carts/items/selected/${itemId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ selected: selectedItems }),
      },
    );

    const result = await response.json();
    if (!result.ok) {
      console.error("Select all unsuccessful");
    }
  } else if (action === "checkout") {
    const dataCheckout = formData.get("dataCheckout");
    const totalPrice = formData.get("totalPrice");
    const cartId = formData.get("cartId");

    const selectedItems = await JSON.parse(dataCheckout as string).filter(
      (item: CartItem) => item.selected,
    );

    localStorage.setItem(
      "checkoutItems",
      JSON.stringify({ cartId, totalPrice, selectedItems }),
    );
    console.log(selectedItems, dataCheckout, "slecteditems");
    return redirect("/checkout");
  }

  return redirect("/cart");
}
