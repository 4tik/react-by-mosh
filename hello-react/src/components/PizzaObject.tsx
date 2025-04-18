import React, { useState } from "react";

const PizzaObject = () => {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });
  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Chees"] });
  };
  return (
    <div>
      <div>
        <p>{pizza.name}</p>
        <p>{pizza.toppings.join(" | ")}</p>
      </div>
      <button onClick={handleClick} className="btn btn-danger">
        CLICK
      </button>
    </div>
  );
};

export default PizzaObject;
