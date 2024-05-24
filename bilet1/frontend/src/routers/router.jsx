import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/Pages/Home";
import Basket from "../components/Pages/Basket";
import Fav from "../components/Pages/Fav";
import Detail from "../components/Pages/Detail";
import Admin from "../components/Pages/AdminPanel";
import MainDetail from "../components/Pages/Detail";
import CreateProduct from "../components/Pages/AdminPanel/CreateProduct";
import EditProduct from "../components/Pages/AdminPanel/EditProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/fav",
        element: <Fav />,
      },
      {
        path: "/maindetail/:id",
        element: <MainDetail />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,  
  },
  {
    path: "/post",
    element: <CreateProduct />,
  },
  {
    path: "/edit/:id",
    element: <EditProduct />,
  },
]);

export default router;
