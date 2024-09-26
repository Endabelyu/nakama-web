import React from "react";
import "@/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeRoute from "./routes/home/home";
import ProductsRoute from "./routes/products/products";
import ProductDetailRoute from "./routes/product-detail/product-detail";
import CartRoute from "./routes/cart/cart";
import BaseLayout from "./components/layout/base-layout";
import LoginRoute from "./routes/login/login";
import RegisterRoute from "./routes/register/register";
import { loader as HomeLoader } from "./routes/home/home-loader";
import { loader as ProductLoader } from "./routes/product-detail/product-detail-loader";
import { loader as ProductsLoader } from "./routes/products/products-loader";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <BaseLayout />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
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
      },
      {
        path: "/register",
        element: <RegisterRoute />,
        // loader: registerLoader,
        // action: registerAction,
      },
      {
        path: "/login",
        element: <LoginRoute />,
        // loader: loginLoader,
        // action: loginAction,
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
        // loader: cartLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
