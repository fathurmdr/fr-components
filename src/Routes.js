import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DocsPage from "./pages/DocsPage";
import SupportMe from "./pages/SupportMe";
import Sidebar from "./myComponents/Sidebar";
import InputsPage from "./pages/Components/InputsPage";
import CardsPage from "./pages/Components/CardsPage";
import FootersPage from "./pages/Components/FootersPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/",
    element: <Sidebar />,
    children: [
      {
        path: "docs",
        element: <DocsPage />,
      },
      {
        path: "supportMe",
        element: <SupportMe />,
      },
      {
        path: "components/inputs",
        element: <InputsPage />,
      },
      {
        path: "components/cards",
        element: <CardsPage />,
      },
      {
        path: "components/footers",
        element: <FootersPage />,
      },
    ],
  },
]);

export default router;
