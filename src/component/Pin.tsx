import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { Post } from "../lib/loaders";
interface PinProps {
  item: Post;
}
const Pin: React.FC<PinProps> = ({ item }) => {
  return (
    <Marker position={[parseFloat(item.latitude), parseFloat(item.longitude)]}>
      <Popup>
        <div className="flex gap-5">
          <img
            className="w-16 h-12 object-cover rounded"
            src={item.images[0]}
            alt={item.title}
          />
          <div className="flex flex-col justify-between">
            <Link rel="stylesheet" to={`/${item.id}`}>
              {item.title}
            </Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;
