import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {useSearchParams } from "react-router";

export default function Sort({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "";
  
  function handleChange(value) {
    searchParams.set("sortBy", value);
    setSearchParams(searchParams);
  }
  
  return (
    <Select onValueChange={handleChange} value={sortBy}>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select sorting type" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Sort</SelectLabel>
          {options.map((option) => (
            <SelectItem value={option.value} key={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
