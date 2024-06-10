import AppLayout from "@/components/AppLayout";
import About from "@/pages/About";
import Home from "@/pages/Home";
import ShipmentDetails from "@/pages/ShipmentDetails";
import Shipments from "@/pages/shipments/Shipments";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/shipments",
        element: <Shipments />,
      },
      {
        path: "/shipments/:shipmentId",
        element: <ShipmentDetails />,
      },
    ],
  },
]);
