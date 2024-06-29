import {
  faBath,
  faBed,
  faBookmark,
  faComment,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import { Post } from "../lib/loaders";

interface CardProps {
  item: Post;
}
const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="flex gap-5 w-full">
      <Link
        to={`/detail/${item.id}`}
        className="basis-2/5 h-52 hidden md:block"
        id="left"
      >
        <img
          src={item.images[0]}
          alt={item.title}
          className=" h-full w-full object-cover rounded-lg"
        />
      </Link>
      <div
        className="md:basis-3/5 flex flex-col justify-between gap-2"
        id="right"
      >
        <h2>
          <Link
            className="text-xl font-semibold text-[#444] transition-all durtion-[0.4s] ease-in-out hover:text-black hover:scale-[1.01]"
            to={`/detail/${item.id}`}
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

              <span>{item.bathroom} bathroom</span>
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
