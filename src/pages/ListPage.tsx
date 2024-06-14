import React from "react";
import Card from "../component/Card";
import Filter from "../component/Filter";
import { DummyData, listData } from "../lib/dumy_data";
import Map from "../component/Map";

const ListPage: React.FC = () => {
  const data: DummyData[] = listData;

  return (
    <div className="flex h-full">
      <div className="basis-3/5 ">
        <div className="pr-[50px] flex flex-col gap-[50px] overflow-y-scroll h-full pb-12">
          <Filter />
          {data.map((res) => (
            <Card key={res.id} item={res} />
          ))}
        </div>
      </div>
      <div className="basis-2/5 bg-[#84DCC6]">
        <Map items={data} />
      </div>
    </div>
  );
};

export default ListPage;
