// import { auth } from "@/lib/auth";
// import { BACKEND_API_URL } from "@/lib/env";
// import { redirect } from "react-router-dom";

import { auth } from "@/lib/auth";
import { BACKEND_API_URL } from "@/lib/env";
import { Order, OrderDetailResponse } from "@/types/order";
import { LoaderFunctionArgs, redirect } from "react-router-dom";

export const OrderDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  const { orderId } = params;
  try {
    const token = auth.getToken();
    if (!token) redirect("/login");
    const response = await fetch(`${BACKEND_API_URL}/orders/${orderId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const Order = (await response.json()) as OrderDetailResponse;
    const { order } = Order.data;
    return {
      orders: order || ({} as Order),
      message: Order.message,
      ok: Order.ok,
    };
  } catch {
    return { orders: {} as Order };
  }
};
