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
import ExpandText from "./components/ExpandText";
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
  const [text, setText] = useState(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  );

  const [maxChars, setMaxChars] = useState(50);

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
      <div className="bg-warning my-2 p-2">
        <ExpandText
          text={text}
          maxChars={maxChars}
          onClickLess={() => setMaxChars(50)}
          onClickMore={() => setMaxChars(text.length)}
        />
      </div>
    </div>
  );
}

export default App;
