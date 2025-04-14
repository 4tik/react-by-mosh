// import Alert from "./Alert";
// import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];

  const handelOnSelectItem = (item: string) => {
    console.log("item :", item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="List of Items"
        onSelectItem={handelOnSelectItem}
      />
    </div>
  );
}

export default App;
