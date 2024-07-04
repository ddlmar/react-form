import UserForm from "@/components/UserForm";
import React, { useState } from "react";

const CreateContact: React.FC = () => {
  const [formData, setFormData] = useState<any>();

  const onSubmit = <OnSubmitType,>(data: OnSubmitType) => {
    setFormData(data);
  };

  console.log(formData);

  return (
    <div className="p-10 flex flex-col gap-4">
      <UserForm onSubmit={onSubmit} />
    </div>
  );
};

export default CreateContact;
