import ListContacts from "@/app/ListContacts";
import Home from "@/app/Home";
import ErrorPage from "@/error-page";
import { RouteObject } from "react-router-dom";
import routes from "./routes";

import { loaderContacts } from "@/app/ListContacts/loader";

export const browserRouter: Array<RouteObject> = [
  {
    path: routes.home.root,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.contacts.root,
    element: <ListContacts />,
    loader: loaderContacts,
    errorElement: <ErrorPage />,
  },
];
