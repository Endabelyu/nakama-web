import { CartResponse } from "@/types";
import { BACKEND_API_URL } from "./env";
import { redirect } from "react-router-dom";
import { auth } from "./auth";

export type Cart = {
  getCart(): Promise<CartResponse | null>;
  deleteItemCart(id: string): Promise<cartSuccess | null>;
  editQuantityItem(id: string, quantity: number): Promise<void | null>;
};

export type cartSuccess = {
  ok: boolean;
  message: string;
};
export type payloadItem = {
  id: boolean;
  quantity: number;
};

export const cart: Cart = {
  async getCart() {
    const token = auth.getToken();
    if (token) redirect("/login");
    const response = await fetch(`${BACKEND_API_URL}/carts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) return null;
    const cartData = (await response.json()) as CartResponse;
    return cartData;
  },

  async deleteItemCart(id: string) {
    const token = auth.getToken();
    if (token) redirect("/login");
    const response = await fetch(`${BACKEND_API_URL}/carts/items/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const deleteItem = (await response.json()) as cartSuccess;

    if (!response.ok) return null;

    redirect("/cart");
    return deleteItem;
  },

  // async editQuantityItem(id: string, quantity: number) {
  //   // process data
  // },
};
