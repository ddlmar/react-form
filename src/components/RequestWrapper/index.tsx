import { UseQueryResult } from "@tanstack/react-query";
import { TableCell, TableRow } from "../ui/table";

interface RequestWrapperProps<RequestType> {
  request: UseQueryResult<RequestType, Error>;
  children: (data: RequestType) => React.ReactNode;
}

const RequestWrapper = <Type,>({
  request,
  children,
}: RequestWrapperProps<Type>) => {
  if (request.isLoading) {
    return (
      <TableRow>
        <TableCell>Loading...</TableCell>
      </TableRow>
    );
  }

  if (request.isError) {
    return (
      <TableRow>
        <TableCell>Error: {request.error.message}</TableCell>
      </TableRow>
    );
  }

  if ((Array.isArray(request.data) && !request.data.length) || !request.data) {
    return (
      <TableRow>
        <TableCell>No data</TableCell>
      </TableRow>
    );
  }

  return children(request.data);
};

export default RequestWrapper;
