import { useSearchParams } from "react-router";
import OrderRow from "./OrderRow";
import useOrders from "./useOrders";

export default function OrdersTable() {
  const { orders, error, isLoading } = useOrders();
  const [searchParams] = useSearchParams();

  if (isLoading) return <div>loading...</div>;
  if (error) return <div>error ... </div>;

  // Searching
  const searchTerm = searchParams.get("search").toLocaleLowerCase() || "";
  const searchOrders = orders.filter((order) =>
    order.guests.fullName.toLocaleLowerCase().includes(searchTerm)
  );

  // Sorting
  const sortBy = searchParams.get("sortBy") || "id-asc";
  const [field, direction] = sortBy.split("-");
  const modifire = direction === "asc" ? 1 : -1;

  const sortedOrders = searchOrders.sort((a, b) => {
    const aValue = field.includes(".")
      ? field.split(".").reduce((obj, key) => obj[key], a)
      : a[field];

    const bValue = field.includes(".")
      ? field.split(".").reduce((obj, key) => obj[key], b)
      : b[field];
    // return (a[field] - b[field]) * modifire;
    return (aValue - bValue) * modifire; // This line sorts the orders based on the field and direction specified in the URL parameters.
  });

  
  return (
    <div className="rounded-lg border overflow-hidden mx-auto">
      <table className="table-auto w-full border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2 text-left">Order ID</th>
            <th className="px-4 py-2 text-left">Customer</th>
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-left">Quantity</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {sortedOrders.map((order) => (
            <OrderRow order={order} key={order.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
