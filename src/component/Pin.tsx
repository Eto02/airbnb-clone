import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { DummyData } from "../lib/dumy_data";
interface PinProps {
  item: DummyData;
}
const Pin: React.FC<PinProps> = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="flex gap-5">
          <img
            className="w-16 h-12 object-cover rounded"
            src={item.img}
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
