// import { auth } from "@/lib/auth";
// import { BACKEND_API_URL } from "@/lib/env";
// import { CartItem } from "@/types";
// import { ActionFunctionArgs, redirect } from "react-router-dom";

// export async function checkoutAction({ request }: ActionFunctionArgs) {
//   const formData = await request.formData();
//   const action = formData.get("action");
//   const itemId = formData.get("itemId");

//   const token = auth.getToken();
//   if (!token) return redirect("/login");

//   if (action === "delete") {
//     // Handle delete item
//     const response = await fetch(`${BACKEND_API_URL}/carts/items/${itemId}`, {
//       method: "DELETE",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     if (!response.ok) {
//       console.error("Delete unsuccessful");
//     }
//   } else if (action === "update") {
//     const quantity = Number(formData.get("quantity"));
//     const response = await fetch(`${BACKEND_API_URL}/carts/items/${itemId}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify({ quantity }),
//     });
//     if (!response.ok) {
//       console.error("Update unsuccessful");
//     }
//   } else if (action === "selectAll") {
//     // Handle select all
//     const cartId = formData.get("cartId");
//     const allItems = JSON.parse(formData.get("allItems") as string);
//     const allSelected = JSON.parse(formData.get("allSelected") as string);
//     const arrayStringItems = allItems.map((item: CartItem) => item.id);
//     const response = await fetch(
//       `${BACKEND_API_URL}/carts/items/selected/${cartId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ payload: allSelected ? arrayStringItems : [] }),
//       },
//     );

//     const result = await response.json();
//     if (!result.ok) {
//       console.error("Select all unsuccessful");
//     }
//   } else if (action === "selectItem") {
//     const itemId = formData.get("itemId");
//     const cartId = formData.get("cartId");
//     const response = await fetch(
//       `${BACKEND_API_URL}/carts/items/selected/${cartId}`,
//       {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ payload: [itemId] }),
//       },
//     );

//     const result = await response.json();
//     if (!result.ok) {
//       console.error("Select all unsuccessful");
//     }
//   } else if (action === "checkout") {
//     const dataCheckout = formData.get("dataCheckout");

//     const selectedItems = await JSON.parse(dataCheckout as string).map(
//       (item: CartItem) => item.selected,
//     );

//     localStorage.setItem("checkoutItems", JSON.stringify(selectedItems));
//     // return redirect("/");
//   }

//   return redirect("/cart");
// }
