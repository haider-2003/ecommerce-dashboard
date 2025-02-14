import Search from "@/components/Search";
import Sort from "@/components/Sort";

export default function OrderTableOperations() {
  //   const options = [
  // { value: "name-asc", label: "Sort by name (A-Z)" },
  // { value: "name-desc", label: "Sort by name (Z-A)" },
  // { value: "regularPrice-asc", label: "Sort by price (low first)" },
  // { value: "regularPrice-desc", label: "Sort by price (high first)" },
  // { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
  // { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
  //   ];
  return (
    <div className="flex justify-between items-center">
    <Search/>
      <Sort
        options={[
          { value: "id-asc", label: "Sort by id (asc)" },
          { value: "id-desc", label: "Sort by id (desc)" },
          { value: "products.price-asc", label: "Sort by price (Low-High)" },
          { value: "products.price-desc", label: "Sort by price (High-Low)" },
          { value: "guests.fullName-asc", label: "Sort by name (A-Z)" },
          { value: "guests.fullName-desc", label: "Sort by name (Z-A)" },
          { value: "orderQuantity-asc", label: "Sort by quantity (Low-High)" },
          { value: "orderQuantity-desc", label: "Sort by quantity (High-Low)" },
        ]}
      />
    </div>
  );
}
