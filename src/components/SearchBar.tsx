import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

interface Query {
  type: string;
  city: string;
  minPrice: number;
  maxPrice: number;
}

const types = ["buy", "rent"];

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState<Query>({
    type: "buy",
    city: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val: string): void => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    setQuery((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <div className="">
        {types.map((type) => (
          <button
            className={`${
              query.type == type ? "bg-black text-white " : "bg-white"
            } px-[36px] py-[16px] border border-solid border-b-0  border-[#999] cursor-pointer capitalize first:rounded-tl-[5px] first:border-r-0 last:rounded-tr-[5px] last:border-l-0  `}
            key={type}
            onClick={() => switchType(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <form className=" border md:border-1 md:border-solid md:border-[#999] flex flex-col md:flex-row justify-between h-[64px]  gap-[5px] md:gap-0">
        <input
          type="text"
          name="city"
          id="city"
          placeholder="City Location"
          className=" bottom-1 border-solid border-[#999] md:border-0 p-[18px]  md:px-[10px] md:py-0 w-full flex-1"
          onChange={handleChange}
        />
        <input
          type="number"
          name="minPrice"
          id="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className=" bottom-1  border-solid border-[#999] md:border-0 p-[18px] md:px-[10px] md:py-0 w-full flex-1"
          onChange={handleChange}
        />
        <input
          type="number"
          name="maxPrice"
          id="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className=" bottom-1  border-solid border-[#999] md:border-0 p-[18px]  md:px-[10px]  md:py-0 w-full  flex-1"
          onChange={handleChange}
        />
        <Link
          className="flex border-0 cursor-pointer bg-[#84DCC6] basis-1/6 p-2 md:p-0 items-center justify-center"
          to={`/list?type=${query.type}&city=${query.city}&minPrice=${query.minPrice}&maxPrice=${query.maxPrice}`}
        >
          {" "}
          <FontAwesomeIcon
            className="w-[24px] h-[24px] text-white"
            icon={faMagnifyingGlass}
          />
        </Link>
      </form>
    </div>
  );
};

export default SearchBar;
