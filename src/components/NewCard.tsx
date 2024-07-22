import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Post } from "@/lib/loaders";
import {
  faBath,
  faBed,
  faBookmark,
  faComment,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "./ui/button";
interface CardProps {
  item: Post;
}
export const NewCard: React.FC<CardProps> = ({ item }) => {
  return (
    <Card className="w-full ">
      <CardContent className="p-4">
        <div className="flex gap-5">
          <Link
            to={`/detail/${item.id}`}
            className="basis-3/5 h-48 hidden md:block"
            id="left"
          >
            <img
              src={item.images.length > 0 ? item.images[0] : ""}
              alt={item.title}
              className=" h-full w-full object-cover rounded-lg"
            />
          </Link>
          <div
            className="md:basis-2/5 flex flex-col justify-between "
            id="right"
          >
            <div className="flex justify-between">
              <h2>
                <Link
                  className="text-xl font-semibold text-[#444] transition-all durtion-[0.4s] ease-in-out hover:text-black hover:scale-[1.01]"
                  to={`/detail/${item.id}`}
                >
                  {item.title}
                </Link>
              </h2>
            </div>
            <p className="text-sm flex items-center text-[#888]">
              <FontAwesomeIcon size="xs" icon={faLocationDot} />
              <span>{item.address}</span>
            </p>
            <Badge className="w-2/5 flex">$ {item.price}</Badge>
            <div className="flex justify-between gap-2">
              <div className="flex gap-5 text-sm">
                <Badge variant="secondary" className="flex flex-col">
                  <span>
                    <FontAwesomeIcon size="xs" icon={faBed} /> {item.bedroom}
                  </span>
                  bedroom
                </Badge>
                <Badge variant="secondary" className="flex flex-col">
                  <span>
                    <FontAwesomeIcon size="xs" icon={faBath} />
                    {item.bathroom}
                  </span>
                  bathroom
                </Badge>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <Button size="icon">
              <FontAwesomeIcon size="xs" icon={faBookmark} />
            </Button>
            <Button variant="outline" size="icon">
              <FontAwesomeIcon size="xs" icon={faComment} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
