import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
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

  const [isShowAlert, setIsShowAlert] = useState(false);

  const handelOnSelectItem = (item: string) => {
    console.log("item :", item);
  };
  return (
    <div>
      {/* <Alert onClose={() => console.log("click")}>
        <strong>A simple primary alert—check it out!</strong>
      </Alert> */}
      <ListGroup
        items={items}
        heading="List of Items"
        onSelectItem={handelOnSelectItem}
      />
      {isShowAlert && (
        <Alert onClose={() => setIsShowAlert(false)}>
          <strong>Button Alert</strong>{" "}
        </Alert>
      )}

      <Button onClick={() => setIsShowAlert(!isShowAlert)}>
        Custom Button
      </Button>
    </div>
  );
}

export default App;
