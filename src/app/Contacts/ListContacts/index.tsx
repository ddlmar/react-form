import routes from "@/routes/routes";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ListContacts: React.FC = () => {
  const data = useLoaderData() as Array<Contact>;

  return (
    <div>
      <Link to={routes.home.root}>Go to home</Link>
      <div>
        {data.map((contact) => (
          <Link
            key={contact.id}
            to={routes.contacts.detail.replace(":id", contact.id!.toString())}
          >
            <p>{contact.name}</p>
            <p>{contact.age}</p>
            <p>{contact.country}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListContacts;
