import { createBrowserRouter } from "react-router-dom";
import Production from "../pages/production/Production";
import ProductionHome from "../pages/production/ProductionHome/ProductionHome";
import ProductionTools from "../pages/production/ProductionTools/ProductionTools";
import ProductionCreateCheck from "../pages/production/ProductionCreateCheck/ProductionCreateCheck";
import ProductionCheck from "../pages/production/ProductionCheck/ProductionCheck";
import ProductionStorage from "../pages/production/ProductionStorage/ProductionStorage";
import ProductionManage from "../pages/production/ProductionManage/ProductionManage";
import ProductionHelp from "../pages/production/ProductionHelp/ProductionHelp";
import ProductionTutorial from "../pages/production/ProductionTutorial/ProductionTutorial";
import ProductionRanking from "../pages/production/ProductionRanking/ProductionRanking";
import ProductionCategory from "../pages/production/ProductionCategory/ProductionCategory";
import ProductionNews from "../pages/production/ProductionNews/ProductionNews";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Production />,
    children: [
      { path: "/", element: <ProductionHome /> },
      { path: "home", element: <ProductionHome /> },
      { path: "news", element: <ProductionNews /> },
      { path: "category", element: <ProductionCategory /> },
      { path: "tools", element: <ProductionTools /> },
      { path: "create", element: <ProductionCreateCheck /> },
      { path: "check", element: <ProductionCheck /> },
      { path: "storage", element: <ProductionStorage /> },
      { path: "manage", element: <ProductionManage /> },
      { path: "help", element: <ProductionHelp /> },
      { path: "tutorial", element: <ProductionTutorial /> },
      // { path: "ranking", element: <ProductionRanking /> },
      // { path: "login", element: <ProductionTutorial /> },
    ],
  },
]);
