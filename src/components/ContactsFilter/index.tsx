import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { z } from "zod";
import { Input } from "../ui/input";
import { useDebounce } from "@/hooks/debounce";

interface ContactsFilterProps {
  paramsKey: string;
}

const schema = z.object({
  search: z.string().optional(),
});

const ContactsFilter: React.FC<ContactsFilterProps> = ({ paramsKey }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const values = {
    [paramsKey]: searchParams.get(paramsKey) || "",
  };

  const { register } = useForm({
    resolver: zodResolver(schema),
    values,
  });

  const onSearch = useDebounce<string>((value) => {
    setSearchParams((state) => {
      if (value) {
        return { ...state, search: value };
      }

      state.delete(paramsKey);
      return state;
    });
  }, 500);

  return (
    <Input
      placeholder="search"
      {...register(paramsKey)}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default ContactsFilter;
