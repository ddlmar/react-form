import { UseQueryResult } from "@tanstack/react-query";

interface RequestWrapperProps<RequestType> {
  request: UseQueryResult<RequestType, Error>;
  children: (data: RequestType) => React.ReactNode;
}

const RequestWrapper = <Type,>({
  request,
  children,
}: RequestWrapperProps<Type>) => {
  if (!request.data || request.isLoading) {
    return null;
  }

  return children(request.data);
};

export default RequestWrapper;
