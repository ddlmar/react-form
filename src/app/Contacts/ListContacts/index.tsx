import RequestWrapper from "@/components/RequestWrapper";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import routes from "@/routes/routes";
import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router-dom";

const data = [
  {
    id: 1,
    name: "Delmar",
    age: 26,
    country: "Brazil",
  },
  {
    id: 2,
    name: "John",
    age: 26,
    country: "USA",
  },
  {
    id: 3,
    name: "Maria",
    age: 26,
    country: "Brazil",
  },
  {
    id: 4,
    name: "Elena",
    age: 26,
    country: "Russia",
  },
];

const listContacts = async (params: string | null) => {
  const response: Array<Contact> = await new Promise((resolve) => {
    setTimeout(() => {
      if (params) {
        resolve(
          data.filter((contact) =>
            contact.name.toUpperCase().includes(params.toUpperCase())
          )
        );
      } else {
        resolve(data);
      }
    }, 1000);
  });
  return response;
};

const ListContacts: React.FC = () => {
  const debounceRef = useRef<string | number | NodeJS.Timeout | undefined>();

  const inputRef = useRef<HTMLInputElement>(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const name = searchParams.get("search") || "";

  const contactsRequest = useQuery({
    queryKey: ["contacts", name],
    queryFn: () => listContacts(name),
  });

  const onSearch = useCallback(
    (value: string | null) => {
      clearTimeout(debounceRef.current);

      debounceRef.current = setTimeout(() => {
        setSearchParams((state) => {
          if (value) {
            return { ...state, search: value };
          }

          state.delete("search");
          return state;
        });
      }, 500);
    },
    [setSearchParams]
  );

  useEffect(() => {
    if (inputRef.current && name) {
      inputRef.current.value = name;
    }
  }, [name]);

  return (
    <div className="flex flex-col gap-6">
      <Link to={routes.home.root}>Go to home</Link>
      <div className="flex flex-col p-4 gap-2">
        <Input
          ref={inputRef}
          className="text-slate-800"
          placeholder="search"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Table className="bg-slate-800">
          <TableCaption>A list of contacts</TableCaption>
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead>id</TableHead>
              <TableHead>name</TableHead>
              <TableHead>age</TableHead>
              <TableHead>country</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <RequestWrapper request={contactsRequest}>
              {(contacts) =>
                contacts.map((contact) => (
                  <TableRow key={contact.id} className="hover:bg-slate-700">
                    <TableCell>{contact.id}</TableCell>
                    <TableCell>{contact.name}</TableCell>
                    <TableCell>{contact.age}</TableCell>
                    <TableCell>{contact.country}</TableCell>
                  </TableRow>
                ))
              }
            </RequestWrapper>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ListContacts;
