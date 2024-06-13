import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface Query {
  type: string;
  location: string;
  minPrice: number;
  maxPrice: number;
}

const types = ["buy", "rent"];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: string): void => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div>
      <div className="">
        {types.map((type) => (
          <button
            className={`${
              query.type == type ? "bg-black text-white " : "bg-white"
            } px-[36px] py-[16px] border-1 border-solid border-b-0  border-[#999] cursor-pointer capitalize first:rounded-tl-[5px] first:border-r-0 last:rounded-tr-[5px] last:border-l-0`}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="border-1 border-solid  border-[#999] flex justify-between h-[64px] gap-[5px] ">
        <input
          type="text"
          name="location"
          id="location"
          placeholder="City Location"
          value={query.location}
          className="border-0 px-[10px] py-0 w-[200px]"
        />
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="border-0 px-[10px] py-0 w-[200px]"
        />
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          value={query.maxPrice}
          className="border-0 px-[10px] py-0 w-[200px]"
        />
        <button
          type="submit"
          className="border-0 cursor-pointer bg-[#84DCC6] basis-1/6"
        >
          <FontAwesomeIcon
            className="w-[24px] h-[24px]"
            icon={faMagnifyingGlass}
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
