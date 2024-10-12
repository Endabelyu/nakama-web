export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  ok: boolean;
  message: string;
  data?: ProductData[];
  pagination?: paginationData;
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

export type CartResponse = {
  ok: boolean;
  message: string;
  data: Cart;
  totalItem?: number;
  totalPrice?: number;
};
export type Cart = {
  id: string;
  allSelected: boolean;

  userId: string | null;
  createdAt: Date;
  updatedAt: Date;

  user: User;
  items: CartItem[];
};

export type CartItem = {
  id: string;
  selected: boolean;
  productId: string;
  quantity: number;
  cartId: string;
  createdAt: Date;
  updatedAt: Date;

  product: ProductData;
};

export interface LoginResponse {
  ok: boolean;
  message: string;
  data: User;
  token: string;
}

export interface RegisterResponse {
  ok: boolean;
  message: string;
  data: User;
}
