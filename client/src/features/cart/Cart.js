import React from "react";
import CartItem from "./CartItem";
import { BsFillCartXFill } from "react-icons/bs";
import { useGetCartQuery } from "./cartSlice";
import Spinner from "../../Components/Spinner";
import CartPayout from "./CartPayout";
import { useNavigate } from "react-router-dom";

import Error from "../../Pages/Error";

const Cart = () => {
  const { data: items, isLoading } = useGetCartQuery();
  const navigate = useNavigate();

  let render = "";

  const handleCheckout = () => {
    navigate("/cart/checkout");
  };

  if (isLoading) {
    render = <Spinner />;
  } else if (items.length === 0) {
    render = (
      <Error message={"No items in the cart"} icon={<BsFillCartXFill />} />
    );
  } else {
    render = (
      <div className="fluid-container cart-section">
        <div className="cart-items">
          {items.map((item, index) => (
            <CartItem item={item} index={index} key={item._id} />
          ))}
        </div>
        <div className="cart-pay-section">
          <CartPayout items={items} />
          <button onClick={handleCheckout} className="btn btn-primary p-2">
            Checkout
          </button>
        </div>
      </div>
    );
  }

  return render;
};

export default Cart;
