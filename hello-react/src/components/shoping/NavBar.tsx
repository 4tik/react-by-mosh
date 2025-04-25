import React from "react";
interface Props {
  cartItemsCount: number;
}
const NavBar = ({ cartItemsCount }: Props) => {
  return (
    <div>
      <p>Cart Items : {cartItemsCount}</p>
    </div>
  );
};

export default NavBar;
