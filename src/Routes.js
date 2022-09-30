import { createHashRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import DocsPage from "./pages/DocsPage";
import SupportMe from "./pages/SupportMe";
import Sidebar from "./myComponents/Sidebar";
import InputsPage from "./pages/Components/InputsPage";
import CardsPage from "./pages/Components/CardsPage";
import FootersPage from "./pages/Components/FootersPage";
import ErrorPage from "./pages/ErrorPage";
import ButtonPage from "./pages/Components/ButtonPage";

const router = createHashRouter([
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
        path: "components/button",
        element: <ButtonPage />,
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
  { path: "/*", element: <ErrorPage /> },
]);

export default router;
