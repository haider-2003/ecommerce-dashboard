import { supabase } from "@/lib/supabase";

export async function getOrders() {
  let { data: orders, error } = await supabase
    .from("orders")
    .select("*,guests(*),products(*)");

  if (error) {
    throw new Error("Failed to fetch orders");
  }

  return orders;
}
