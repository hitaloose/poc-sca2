import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./pages/home";
import { SiemaTicketHandler } from "./pages/siema-ticket-handler";
import { ComunicadosTicketHandler } from "./pages/comunicados-ticket-handler";
import { TucandeiraTicketHandler } from "./pages/tucandeira-ticket-handler";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/poc-sca2",
    element: <Home />,
  },
  {
    path: "/poc-sca2/siema-ticket-handler",
    element: <SiemaTicketHandler />,
  },
  {
    path: "/poc-sca2/comunicados-ticket-handler",
    element: <ComunicadosTicketHandler />,
  },
  {
    path: "/poc-sca2/tucandeira-ticket-handler",
    element: <TucandeiraTicketHandler />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
