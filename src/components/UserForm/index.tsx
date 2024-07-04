import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const contactSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Nome obrigatório",
  }),
  email: z.string().email({
    message: "Email inválido",
  }),
  phone: z
    .string({
      required_error: "Phone number is required",
      message: "Phone number is invalid",
      invalid_type_error: "Phone number is invalid",
      description: "Phone number must be a valid phone number",
    })
    .min(9, {
      message: "Telefone deve ter no mínimo 9 caracteres",
    })
    .max(13, {
      message: "Telefone deve ter no máximo 13 caracteres",
    }),
});

type ContactFormSchema = z.infer<typeof contactSchema>;

interface UserFormProps {
  onSubmit: (data: ContactFormSchema) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactSchema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-10 flex flex-col gap-4"
    >
      <Input {...register("name")} placeholder="Type your name" />
      {errors.name && (
        <span className="font-semibold text-red-600">
          {errors.name.message}
        </span>
      )}
      <Input {...register("email")} placeholder="Type your email" />
      {errors.email && (
        <span className="font-semibold text-red-600">
          {errors.email.message}
        </span>
      )}
      <Input {...register("phone")} placeholder="Type your phone number" />
      {errors.phone && (
        <span className="font-semibold text-red-600">
          {errors.phone.message}
        </span>
      )}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default UserForm;
