import { Link } from "react-router-dom";
import { DummyData } from "../lib/dumy_data";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBath,
  faBed,
  faBookmark,
  faComment,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  item: DummyData;
}
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="flex gap-5">
      <Link to={`/${item.id}`} className="basis-2/5 h-52 " id="left">
        <img
          src={item.img}
          alt={item.title}
          className=" h-full w-full object-cover rounded-lg"
        />
      </Link>
      <div className="basis-3/5 flex flex-col justify-between gap-2" id="right">
        <h2>
          <Link
            className="text-xl font-semibold text-[#444] transition-all durtion-[0.4s] ease-in-out hover:text-black hover:scale-[1.01]"
            to={`/${item.id}`}
          >
            {item.title}
          </Link>
        </h2>
        <p className="text-sm flex items-center gap-1 text-[#888]">
          <FontAwesomeIcon size="xs" icon={faLocationDot} />
          <span>{item.address}</span>
        </p>
        <p className="text-xl font-light p-1 rounded ba gap-1 bg-[#84DCC6]/50 max-w-fit">
          $ {item.price}
        </p>
        <div className="flex justify-between gap-2">
          <div className="flex gap-5 text-sm">
            <div className="flex items-center gap-1 bg-[whitesmoke] rounded-md">
              <FontAwesomeIcon size="xs" icon={faBed} />

              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-1 bg-[whitesmoke] rounded-md">
              <FontAwesomeIcon size="xs" icon={faBath} />

              <span>{item.bedroom} bathroom</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="border-1 border-solid border-[#888] rounded px-[2px] py-[5px] cursor-pointer flex items-center justify-center hover:bg-[lightgrey]">
              <FontAwesomeIcon size="xs" icon={faBookmark} />
            </div>
            <div className="border-1 border-solid border-[#888] rounded px-[2px] py-[5px] cursor-pointer flex items-center justify-center hover:bg-[lightgrey]">
              <FontAwesomeIcon size="xs" icon={faComment} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
