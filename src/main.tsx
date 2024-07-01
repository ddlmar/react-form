import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import { browserRouter } from "./routes/index.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Spinner } from "./components/Spinner/index.tsx";

const router = createBrowserRouter(browserRouter);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="w-svw h-svh bg-slate-800 text-slate-200">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} fallbackElement={<Spinner />} />
      </QueryClientProvider>
    </div>
  </React.StrictMode>
);
