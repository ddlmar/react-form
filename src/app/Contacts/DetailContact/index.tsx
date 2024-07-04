import React from "react";
import { useSearchParams } from "react-router-dom";

const DetailContact: React.FC = () => {
  const [searchParams] = useSearchParams();

  const id = searchParams.get("id");

  return (
    <div>
      <h1>Detail Contact: {id}</h1>
      <p>hey</p>
    </div>
  );
};

export default DetailContact;
