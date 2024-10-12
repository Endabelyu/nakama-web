// import { auth } from "@/lib/auth";
// import { BACKEND_API_URL } from "@/lib/env";
// import { redirect } from "react-router-dom";

import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";
import { OrderResponse } from "@/types/order";
import { redirect } from "react-router-dom";

export const OrderLoader = async () => {
  try {
    const token = auth.getToken();
    if (!token) redirect("/login");
    const response = await fetch(`${BACKEND_API_URL}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const Order = (await response.json()) as OrderResponse;
    return {
      orders: Order.data.orders || [],
      message: Order.message,
      ok: Order.ok,
    };
  } catch {
    return { orders: [] };
  }
};
