import React, { useEffect, useState } from "react";
import { useAddToCartMutation, useGetCartQuery } from "../cart/cartSlice";
import { useGetUserIdQuery } from "../user/userSlice";

const CartBtn = ({ itemID }) => {
  const [addToCart] = useAddToCartMutation();
  const [inCart, setInCart] = useState(true);
  const [disabled, setIsDisable] = useState(false);

  const { data: cart, isLoading, isUninitialized } = useGetCartQuery();
  const { data: userID } = useGetUserIdQuery();

  const handleSubmit = () => {
    setIsDisable(true);
    addToCart(itemID);
  };

  useEffect(() => {
    if (!isUninitialized && !isLoading) {
      const item = cart.find((item) => item._id === itemID);
      if (!item) {
        setInCart(false);
      } else {
        setInCart(true);
      }
    }
  }, [cart, inCart, isLoading, isUninitialized, itemID]);

  useEffect(() => {
    if (userID === "0" || inCart) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [userID, inCart]);

  return (
    <button
      className="btn btn-primary"
      onClick={handleSubmit}
      disabled={disabled}
    >
      {inCart ? "In  the Cart" : "Add to Cart"}
    </button>
  );
};

export default CartBtn;
