import { auth } from "@/lib/auth";
import { cart } from "@/lib/cart";
import { redirect } from "react-router-dom";

// export const cartLoader = async () => {
//   const user = await auth.checkUser();
//   if (!user) return redirect("/login");

//   const token = auth.getToken();

//   try {
//     const response = await fetch(`${BACKEND_API_URL}/carts`, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//     });

//     const cartData = (await response.json()) as CartResponse;

//     return {
//       cartData,
//     };
//   } catch (error) {
//     console.error("Error fetching cart data:", error);
//     return {
//       cartData: {} as CartResponse,
//     };
//   }
// };

export const cartLoader = async () => {
  try {
    const user = await auth.checkUser();
    if (!user) return redirect("/login");
    const response = await cart.getCart();

    return response;
  } catch (error) {
    console.error(error);
    return null;
  }
};
