import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import Shop from "./components/Shop/Shop";
import Baskets from "./components/Baskets/Baskets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "shop",
        element: <Shop></Shop>,
      },
      {
        path: "/",
        element: <Shop></Shop>,
      },
      {
        path: "baskets",
        element: <Baskets />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);
