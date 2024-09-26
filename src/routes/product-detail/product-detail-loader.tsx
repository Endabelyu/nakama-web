import { BACKEND_API_URL } from "@/lib/env";
import {  ProductDetail } from "@/types";
import { LoaderFunctionArgs } from "react-router-dom";

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const { slug } = params;

  try {
    const response = await fetch(`${BACKEND_API_URL}/products/${slug}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const Product = (await response.json()) as ProductDetail;
    console.log(Product, "dats");
    return {
      products: Product.data,
      message: Product.message,
      ok: Product.ok,
    };
  } catch {
    return {
      products: undefined,
      pagination: { page: 1, limit: 10, total: 0 },
    };
  }
};
