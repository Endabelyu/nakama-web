import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";
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
      console.error("Delete unsuccessful");
    }
  } else if (action === "update") {
    const quantity = Number(formData.get("quantity"));
    const methods = formData.get("method") as string;
    const response = await fetch(`${BACKEND_API_URL}/carts/items/${itemId}`, {
      method: methods,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ quantity }),
    });
    if (!response.ok) {
      console.error("Update unsuccessful");
    }
  } else if (action === "checkout") {
    const dataChekcout = formData.get("dataChekcout");
    console.log(dataChekcout);
  }

  return redirect("/cart");
}
