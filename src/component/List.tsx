import { DummyData, listData } from "../lib/dumy_data";
import Card from "./Card";

const List = () => {
  const data: DummyData[] = listData;
  return (
    <div className="flex flex-col gap-12">
      {data.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
