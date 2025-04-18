import React, { useState } from "react";

const ShoppingCart = () => {
  const [cart, setCart] = useState({
    id: 1,
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Shirt",
        quantity: 1,
      },
      {
        id: 2,
        title: "T-shirt",
        quantity: 1,
      },
    ],
  });
  const handleCart = () => {
    setCart({
      ...cart,
      items: cart.items.map((item) => ({
        ...item,
        quantity: item.quantity + 1,
      })),
    });
  };
  return (
    <div>
      <div>
        <ul className="list-group">
          {cart.items.map((item) => (
            <li className="list-group-item">
              # {item.title} | {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleCart} className="btn btn-secondary mt-1">
        Add to Cart
      </button>
    </div>
  );
};

export default ShoppingCart;
