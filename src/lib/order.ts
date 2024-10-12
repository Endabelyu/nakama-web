import { redirect } from "react-router-dom";
import { auth } from "./auth";
import { BACKEND_API_URL } from "./env";

export type Order = {
  getOrder(): Promise<Response | null>;
};

export const order: Order = {
  async getOrder() {
    const token = auth.getToken();
    if (!token) redirect("/login");
    const response = await fetch(`${BACKEND_API_URL}/orders`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  },
};
