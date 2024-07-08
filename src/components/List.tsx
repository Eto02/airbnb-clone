import { Post } from "../lib/loaders";
import Card from "./Card";
interface ListProps {
  items: Post[];
}

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <div className="flex flex-col gap-12">
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
