import routes from "@/routes/routes";
import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div>
      <Link to={routes.contacts.root}>Go to contacts</Link>
    </div>
  );
};

export default Home;
