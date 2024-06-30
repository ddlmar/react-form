import ListContacts from "@/app/Contacts/ListContacts";
import Home from "@/app/Home";
import ErrorPage from "@/error-page";
import { RouteObject } from "react-router-dom";
import routes from "./routes";

import DetailContact from "@/app/Contacts/DetailContact";

export const browserRouter: Array<RouteObject> = [
  {
    path: routes.home.root,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.contacts.root,
    element: <ListContacts />,
    errorElement: <ErrorPage />,
  },
  {
    path: routes.contacts.detail,
    element: <DetailContact />,
  },
];
