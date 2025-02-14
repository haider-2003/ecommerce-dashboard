import { useSearchParams } from "react-router";
import { Input } from "./ui/input";
import { useState } from "react";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  function handleSearch(e) {
    console.log(e.target.value);

    searchParams.set("search", e.target.value);
    setSearchParams(searchParams);
  }

  return (
    // <form onSubmit={handleSearch}>
    <Input
      className="w-[200px]"
      placeholder="Search by Customer"
      onChange={handleSearch}
      value={search}
    />
    // </form>
  );
}
