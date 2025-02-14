import OrderTableOperations from "@/features/orders/OrderTableOperations";
import OrdresTable from "../features/orders/OrdersTable";

export default function Orders() {
  return (
    <div>
      <h1 className="text-3xl py-3 font-semibold">Orders Mangement</h1>
      <div className="py-8 font-normal">
        <p>
          View and check all orders resgiestd on your platform and edit them if
          necessary.
        </p>
        <p>The changes will be notified to the customer via email</p>
        <div className="pt-6">
          <OrderTableOperations />
        </div>
      </div>

      <OrdresTable />
    </div>
  );
}
