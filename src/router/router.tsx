import { createBrowserRouter } from "react-router-dom";
import Production from "../pages/production/Production";
import ProductionHome from "../pages/production/Productionhome/ProductionHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Production />,
    children: [
      { path: "/", element: <ProductionHome /> },
      { path: "home", element: <ProductionHome /> },
    ],
  },
]);
