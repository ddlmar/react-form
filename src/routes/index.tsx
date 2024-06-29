import Contact from "@/app/Contact";
import Home from "@/app/Home";
import ErrorPage from "@/error-page";
import { RouteObject } from "react-router-dom";
import routes from "./routes";

import { loader } from "@/app/Contact/loader";

export const browserRouter: Array<RouteObject> = [
  {
    path: routes.home.root,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.contacts.root,
    element: <Contact />,
    loader,
    errorElement: <ErrorPage />,
  },
];
