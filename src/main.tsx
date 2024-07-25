import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home";
import { SiemaTicketHandler } from "./pages/siema-ticket-handler";
import { ComunicadosTicketHandler } from "./pages/comunicados-ticket-handler";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/siema-ticket-handler",
    element: <SiemaTicketHandler />,
  },
  {
    path: "/comunicados-ticket-handler",
    element: <ComunicadosTicketHandler />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
