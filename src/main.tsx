import React from "react";
import "@/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/home/home";
import ProductsRoute from "./routes/products/products";
import ProductDetailRoute from "./routes/product-detail/product-detail";
import CartRoute from "./routes/cart/cart";
import BaseLayout from "./routes/root/base-layout";
import LoginRoute from "./routes/login/login";
import RegisterRoute from "./routes/register/register";
import { HomeLoader } from "./routes/home/home-loader";
import { ProductLoader } from "./routes/product-detail/product-detail-loader";
import { ProductsLoader } from "./routes/products/products-loader";
import { RootLoader } from "./routes/root/root-loader";
import { loginAction } from "./routes/login/login-action";
import { loginLoader } from "./routes/login/login-loader";
import { registerLoader } from "./routes/register/register-loader";
import { cartLoader } from "./routes/cart/cart-loader";
import { registerAction } from "./routes/register/register-action";
import { productDetailAction } from "./routes/product-detail/product-detail-action";
import { cartAction } from "./routes/cart/cart-action";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
    loader: RootLoader,
    children: [
      {
        path: "/",
        element: <HomeRoute />,
        loader: HomeLoader,
      },
      {
        path: "/products",
        element: <ProductsRoute />,
        loader: ProductsLoader,
      },
      {
        path: "/products/:slug",
        element: <ProductDetailRoute />,
        loader: ProductLoader,
        action: productDetailAction,
      },
      {
        path: "/register",
        element: <RegisterRoute />,
        loader: registerLoader,
        action: registerAction,
      },
      {
        path: "/login",
        element: <LoginRoute />,
        loader: loginLoader,
        action: loginAction,
      },
      // {
      //   path: "/dashboard",
      //   element: <UserDashboardRoute />,
      //   loader: userDashboardLoader,
      //   action: userDashboardAction,
      // },
      {
        path: "/cart",
        element: <CartRoute />,
        loader: cartLoader,
        action: cartAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
