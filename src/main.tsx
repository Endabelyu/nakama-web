import React from "react";
import App from "@/App.tsx";
import "@/index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    id: "root",
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      // {
      //   path: "/",
      //   element: <HomeRoute />,
      //   loader: homeLoader,
      // },
      // {
      //   path: "/products",
      //   element: <ProductsRoute />,
      //   loader: productsLoader,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
