import { useContacts } from "@/app/requests/contacts";
import ContactsFilter from "@/components/ContactsFilter";
import RequestWrapper from "@/components/RequestWrapper";
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
import React, { useMemo } from "react";
import { Link, useSearchParams } from "react-router-dom";

const ListContacts: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { listContacts } = useContacts();

  const name = useMemo(() => searchParams.get("search"), [searchParams]);

  const contactsRequest = useQuery({
    queryKey: ["contacts", name],
    queryFn: () => listContacts(name),
  });

  return (
    <div className="flex flex-col gap-6">
      <Link to={routes.home.root}>Go to home</Link>
      <div className="flex flex-col p-4 gap-2">
        <ContactsFilter paramsKey={"search"} />
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
