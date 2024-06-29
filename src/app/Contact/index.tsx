import routes from "@/routes/routes";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Contact as ContactType } from "./loader";

const Contact: React.FC = () => {
  const data = useLoaderData() as ContactType;

  console.log(data);

  return (
    <div>
      <Link to={routes.home.root}>Go to home</Link>
    </div>
  );
};

export default Contact;
