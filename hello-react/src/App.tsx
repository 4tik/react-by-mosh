import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";
// import Message from "./Message";
import ListGroup from "./components/ListGroup";
import GameObject from "./components/GameObject";
import PizzaObject from "./components/PizzaObject";
import ShoppingCart from "./components/ShoppingCart";
import NavBar from "./components/shoping/NavBar";
import Cart from "./components/shoping/cart";
function App() {
  let items = [
    "Cras justo odio",
    "Dapibus ac facilisis in",
    "Morbi leo risus",
    "Porta ac consectetur ac",
    "Vestibulum at eros",
  ];

  const [isShowAlert, setIsShowAlert] = useState(false);
  const [cartItems, setCartItems] = useState(["item1", "item2", "item3"]);

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
      <Like onClick={() => console.log("clicked")}></Like>

      <div className="bg-warning my-2 p-2">
        <GameObject></GameObject>
      </div>

      <div className="bg-warning my-2 p-2">
        <PizzaObject></PizzaObject>
      </div>

      <div className="bg-warning my-2 p-2">
        <ShoppingCart />
      </div>

      <div className="bg-info my-2 p-2">
        <NavBar cartItemsCount={cartItems.length} />
        <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
      </div>
    </div>
  );
}

export default App;
