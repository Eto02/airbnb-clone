import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { Post } from "../lib/loaders";
import Pin from "./Pin";

interface MapProps {
  items: Post[];
}

const Map: React.FC<MapProps> = ({ items }) => {
  return (
    <MapContainer
      center={
        items.length === 1
          ? [parseFloat(items[0].latitude), parseFloat(items[0].longitude)]
          : [51.505, -0.09]
      }
      zoom={7}
      scrollWheelZoom={false}
      className="w-full h-full rounded-3xl"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map((item: Post) => (
        <Pin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
