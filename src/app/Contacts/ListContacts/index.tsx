import { useContacts } from "@/app/requests/contacts";
import ContactsFilter from "@/components/ContactsFilter";
import RequestWrapper from "@/components/RequestWrapper";
import { Button } from "@/components/ui/button";
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
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const ListContacts: React.FC = () => {
  const [searchParams] = useSearchParams();

  const { listContacts } = useContacts();

  const navigation = useNavigate();

  const name = useMemo(() => searchParams.get("search"), [searchParams]);

  const contactsRequest = useQuery({
    queryKey: ["contacts", name],
    queryFn: () => listContacts(name),
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col p-4 gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <Link to={routes.home.root}>Go to home</Link>
            <Button onClick={() => navigation(routes.contacts.create)}>
              Create
            </Button>
          </div>
          <div className="w-full h-1 border-b border-slate-200" />
        </div>
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
                  <TableRow
                    key={contact.id}
                    className="hover:bg-slate-700 cursor-pointer"
                    onClick={() =>
                      navigation(
                        routes.contacts.detail.replace(
                          ":id",
                          contact.id.toString()
                        )
                      )
                    }
                  >
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
