import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFilter = (): void => {
    console.log(query);
    setSearchParams(query as Record<string, string>);
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <h1 className="font-light text[24px]">
        Search result for <b>{searchParams.get("city")}</b>
      </h1>
      <div id="top">
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="city">
            Location
          </label>
          <input
            className=" w-full p-[10px] border-1 border-solid border-[#e0e0e0]"
            type="text"
            name="city"
            id="city"
            placeholder="City Location"
            onChange={handleChange}
            defaultValue={query.city}
          />
        </div>
      </div>
      <div id="bottom" className="flex justify-between ">
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="type">
            Type
          </label>
          <select
            onChange={handleChange}
            defaultValue={query.type}
            className="w-[100px] p-[10px] border-1 border-solid border-[#e0e0e0]"
            name="type"
            id="type"
          >
            <option value="">any</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="property">
            Property
          </label>
          <select
            onChange={handleChange}
            defaultValue={query.property}
            className="w-[100px] p-[10px] border-1 border-solid border-[#e0e0e0]"
            name="property"
            id="property"
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-[2px]">
          <label className="text[10px] capitalize" htmlFor="minPrice">
            Min Price
          </label>
          <input
            className="w-[100px] p-[10px] border-1 border-solid border-[#e0e0e0]"
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
          <input
            className="w-[100px] p-[10px] border-1 border-solid border-[#e0e0e0]"
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
          <input
            className="w-[100px] p-[10px] border-1 border-solid border-[#e0e0e0]"
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
