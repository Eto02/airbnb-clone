import { Link } from "react-router-dom";
import { DummyData } from "../lib/dumy_data";
import React from "react";

interface CardProps {
  item: DummyData;
}
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="flex gap-5">
      <Link to={`/${item.id}`} className="basis-2/5 h-52 ">
        <img
          src={item.img}
          alt={item.title}
          className=" h-full w-full object-cover rounded-lg"
        />
      </Link>
      <div className="basis-3/5">
        <h2>
          <Link to={`/${item.id}`} className="basis-2/5 h-52 ">
            {item.title}
          </Link>
        </h2>
      </div>
    </div>
  );
};

export default Card;
