import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import "./index.css";
import Products from "./Products";

const client = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Products />
    </QueryClientProvider>
  </React.StrictMode>
);
