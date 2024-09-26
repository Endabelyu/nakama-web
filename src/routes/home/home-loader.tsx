import { BACKEND_API_URL } from "@/lib/env";
import { Product } from "@/types";

export const loader = async () => {
  try {
    const response = await fetch(`${BACKEND_API_URL}/products?page=1&limit=3`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const Product = (await response.json()) as Product;
    console.log(Product, "dats");
    return {
      products: Product.data || [],
      message: Product.message,
      ok: Product.ok,
      pagination: Product.pagination,
    };
  } catch {
    return { products: [], pagination: { page: 1, limit: 10, total: 0 } };
  }
};
