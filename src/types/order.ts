import { ProductData, User } from ".";

export type OrderResponse = {
  ok: boolean;
  message: string;
  data: {
    orders: Order[];
  };
  user?: User;
};
export type OrderDetailResponse = {
  ok: boolean;
  message: string;
  data: { order: Order };

  user?: User;
};

export type Order = {
  id: string;
  userId: string;
  totalPrice: number;
  status: "PENDING" | "COMPLETED";
  createdAt: string;
  updatedAt: string;
  items: OrderItem[];
};

export type OrderItem = {
  id: string;
  itemCartId: string;
  orderId: string;
  productId: string;
  quantity: number;
  productPrice: number;
  createdAt: string;
  updatedAt: string;
  product: ProductData;
};
