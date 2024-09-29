import { BACKEND_API_URL } from "@/lib/env";
import { Product } from "@/types";

export const loader = async ({ request }: { request: Request }) => {
  try {
    const searchParams = new URL(request.url).searchParams;
    const page = searchParams.get("page") || 1;
    const q = searchParams.get("q") || "";
    const response = await fetch(
      `${BACKEND_API_URL}/products?q=${q}&page=${page}&limit=1`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      },
    );
    const Product = (await response.json()) as Product;
    console.log(Product, "dats");
    return {
      products: Product.data || [],
      message: Product.message,
      ok: Product.ok,
      pagination: Product.pagination || {
        currentPage: page,
        totalPages: 1,
        total: 0,
      },
    };
  } catch {
    return {
      products: [],
      pagination: { currentPage: 1, totalPages: 1, total: 0 },
    };
  }
};
