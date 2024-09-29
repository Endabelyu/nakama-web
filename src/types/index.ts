export type User = {
  id: string;

  fullname?: string;
  username: string;
  email: string;

  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  ok: boolean;
  message: string;
  data: ProductData[];
  pagination: paginationData;
};
export type ProductDetail = {
  ok: boolean;
  message: string;
  data: ProductData;
};
export type paginationData = {
  currentPage: number;
  totalPages: number;
  total: number;
};
export type ProductData = {
  id: string;
  name: string;
  slug: string;
  price: number;
  imageURL: string;
  category: string;
  description: string;
  sku: string;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
};

export type Cart = {
  id: string;

  userId: string | null;
  status: string;

  items: CartItem[];

  createdAt: Date;
  updatedAt: Date;
};

export type CartItem = {
  id: string;

  quantity: number;

  productId: string;
  product: Product;

  cartId: string;

  createdAt: Date;
  updatedAt: Date;
};
