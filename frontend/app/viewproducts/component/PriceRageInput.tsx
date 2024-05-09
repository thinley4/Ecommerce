"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Price_range() {
  const [priceRange, setPriceRange] = useState([0, 0]);
  const Router = useRouter();
  return (
    <div className="p-2 max-w-sm">
      <div className="font-bold text-2xl">Price Range</div>
      <form
        className="flex gap-2"
        onSubmit={(e) => {
          e.preventDefault();
          Router.push(`/viewproducts/${priceRange[0]}-${priceRange[1]}`);
        }}
      >
        <Input
          onChange={(e) => {
            setPriceRange((prev) => [parseInt(e.target.value), prev[1]]);
          }}
        ></Input>
        <Input
          onChange={(e) => {
            setPriceRange((prev) => [prev[0], parseInt(e.target.value)]);
          }}
        ></Input>
        <Input type="submit" className="hidden" />
        <Button type="submit">Apply</Button>
      </form>
    </div>
  );
}

export default Price_range;
