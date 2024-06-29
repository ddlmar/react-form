import routes from "@/routes/routes";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const ListContacts: React.FC = () => {
  const data = useLoaderData() as Array<Partial<Contact>>;

  return (
    <div>
      <Link to={routes.home.root}>Go to home</Link>
      <div>
        {data?.map((contact) => (
          <div key={contact.id}>
            <p>{contact.name}</p>
            <p>{contact.age}</p>
            <p>{contact.country}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListContacts;
