export default function OrderRow({ order }) {
  const {
    id: orderID,
    guests: { fullName },
    products: { name: productName, price },
    orderQuantity,
  } = order;
  const total = price * orderQuantity

  return (
    <tr className="border-t">
      <td className="px-4 py-2">{orderID}</td>
      <td className="px-4 py-2">{fullName}</td>
      <td className="px-4 py-2">{productName}</td>
      <td className="px-4 py-2">{orderQuantity}</td>
      <td className="px-4 py-2">{price}$</td>
      <td className="px-4 py-2">{total}$</td>
    </tr>
  );
}
