import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
export interface Query {
  type: string;
  city: string;
  property: string;
  minPrice: number;
  maxPrice: number;
  bedroom: number;
  [key: string]: string | number;
}

const Filter: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<Query>({
    type: searchParams.get("type") || "",
    city: searchParams.get("city") || "",
    property: searchParams.get("property") || "",
    minPrice: parseInt(searchParams.get("minPrice") || "0"),
    maxPrice: parseInt(searchParams.get("maxPrice") || "0"),
    bedroom: parseInt(searchParams.get("bedroom") || "0"),
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement> | string,
    name?: string
  ): void => {
    if (typeof e === "string" && name) {
      setQuery((prev) => ({ ...prev, [name]: e }));
    } else if (e && typeof e !== "string") {
      const { name, value } = e.target;
      setQuery((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFilter = (): void => {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    Object.keys(query).forEach((key) => {
      const value = query[key as keyof Query];
      if (value) {
        newSearchParams.set(key, value.toString());
      } else {
        newSearchParams.delete(key);
      }
    });
    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-light text[24px]">
        Search result for{" "}
        <b className="font-bold">{searchParams.get("city")}</b>
      </h1>
      <div id=" top" className="px-1">
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="city">
            Location
          </label>
          <Input
            // className=" w-full p-[10px] border-1 border-solid border-[#e0e0e0]"
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div id="bottom" className="flex px-1 justify-between ">
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="type">
            Type
          </label>
          <Select
            onValueChange={(value) => handleChange(value, "type")}
            defaultValue={query.type}
            name="type"
          >
            <SelectTrigger className="w-[100px] p-[10px]">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="buy">buy</SelectItem>
                <SelectItem value="rent">rent</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="property">
            Property
          </label>
          <Select
            onValueChange={handleChange}
            defaultValue={query.property}
            name="property"
          >
            <SelectTrigger className="w-[100px] p-[10px]">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apartment">Apartment</SelectItem>
                <SelectItem value="house">House</SelectItem>
                <SelectItem value="condo">Condo</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="minPrice">
            Min Price
          </label>
          <Input
            className="w-[100px] p-[10px] "
            type="text"
            name="minPrice"
            id="minPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.minPrice}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="maxPrice">
            Max Price
          </label>
          <Input
            className="w-[100px] p-[10px] "
            type="text"
            name="maxPrice"
            id="maxPrice"
            placeholder="any"
            onChange={handleChange}
            defaultValue={query.maxPrice}
          />
        </div>
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="bedroom">
            Bedroom
          </label>
          <Input
            className="w-[100px] p-[10px] "
            type="text"
            name="bedroom"
            id="bedroom"
            placeholder="any"
            defaultValue={query.bedroom}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={handleFilter}
          type="submit"
          className="border-0 p=[10px ] cursor-pointer bg-[#84DCC6] w-[100px]"
        >
          <FontAwesomeIcon
            className="w-[24px] h-[24px] text-white"
            icon={faMagnifyingGlass}
          />
        </button>
      </div>
    </div>
  );
};

export default Filter;
