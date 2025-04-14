import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelectItem }: Props) => {
  // let items = [
  //   "Cras justo odio",
  //   "Dapibus ac facilisis in",
  //   "Morbi leo risus",
  //   "Porta ac consectetur ac",
  //   "Vestibulum at eros",
  // ];
  // items = [];

  // Event handler
  const handleClick = (event: MouseEvent) => {
    console.log("Item clicked : ", event);
  };

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <>
      <h2>{heading}</h2>
      {items.length === 0 && <p>No item Found</p>}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={`list-group-item${
              selectedIndex === index ? " active" : ""
            }`}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
        <hr />
        <li className="list-group-item">Cras justo odio</li>
        <li className="list-group-item">Dapibus ac facilisis in</li>
        <li className="list-group-item">Morbi leo risus</li>
        <li className="list-group-item">Porta ac consectetur ac</li>
        <li className="list-group-item">Vestibulum at eros</li>
      </ul>
    </>
  );
};

export default ListGroup;
