import { Navigate, Route, Routes } from "react-router";
import NotFound from "./NotFound";
import AppLayout from "./components/AppLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Settings from "./pages/Settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {
  const query = new QueryClient();
  return (
    <QueryClientProvider client={query}>
      <div className="w-screen">
        <Routes>
          <Route element={<AppLayout />}>
            <Route
              index
              path="/"
              element={<Navigate replace to="dashboard" />}
            />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </QueryClientProvider>
  );
}
