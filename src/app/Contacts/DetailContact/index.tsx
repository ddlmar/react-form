import React from "react";
import { Form, useLoaderData } from "react-router-dom";

const DetailContact: React.FC = () => {
  const data = useLoaderData() as Partial<Contact>;

  console.log(data, "AAA");

  return (
    <Form method="post" id="contact-form">
      <p>Teste</p>
      {/* <p>
        <span>Name</span>
        <input
          placeholder="Name"
          type="text"
          name="name"
          defaultValue={data?.name}
        />
        <span>Age</span>
        <input
          placeholder="Age"
          type="text"
          name="age"
          defaultValue={data?.age}
        />
      </p>
      <label>
        <span>Country</span>
        <input
          type="text"
          name="country"
          placeholder="Country"
          defaultValue={data?.country}
        />
      </label>
      <p>
        <button type="submit">Save</button>
        <button type="button">Cancel</button>
      </p> */}
    </Form>
  );
};

export default DetailContact;
