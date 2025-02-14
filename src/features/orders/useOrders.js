import { getOrders } from "@/services/apiOrders";
import { useQuery } from "@tanstack/react-query";

export default function useOrders() {
  const {
    data: orders,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getOrders,
  });

  return { orders, error, isLoading };
}
