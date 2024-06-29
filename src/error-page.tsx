import { useRouteError } from "react-router-dom";

interface RouterError {
  data: string;
  error: Error;
  internal: boolean;
  status: number;
  statusText: string;
}

const ErrorPage = () => {
  const error = useRouteError() as RouterError;

  return (
    <div
      id="error-page"
      className="flex flex-col gap-8 justify-center items-center h-screen"
    >
      <h1 className="text-4xl font-bold">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="flex flex-col text-center text-slate-400">
        <i>{error.error?.message}</i>
        <b>Error status: {error.status}</b>
      </p>
    </div>
  );
};

export default ErrorPage;
