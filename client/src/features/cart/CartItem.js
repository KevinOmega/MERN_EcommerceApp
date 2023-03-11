import React, { useEffect, useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { useAddAmountMutation, useDeleteItemMutation } from "./cartSlice";

const CartItem = ({ item, index }) => {
  const [amount, setAmount] = useState(item.amount);

  const [addAmount] = useAddAmountMutation();
  const [deleteItem] = useDeleteItemMutation();

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  const handleBtn = () => {
    addAmount({ index, amount });
  };

  const handleDelete = () => {
    deleteItem(item._id);
  };

  useEffect(() => {
    if (amount < 0) {
      setAmount(0);
    }
    if (amount > 99) {
      setAmount(99);
    }
  }, [amount]);

  return (
    <div className="cart-card">
      <div
        className="card-image"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
      <div className="card-body">
        <h5>{item.name}</h5>
        <p className="text-success">{item.price}$</p>
        <div className="card-counter">
          <label htmlFor="amount">Amount :</label>
          <div className="amount d-flex">
            <input
              type="number"
              id="amount"
              value={amount}
              onChange={handleChange}
            />
            <button className="btn btn-dark ms-1" onClick={handleBtn}>
              Set
            </button>
          </div>
        </div>
      </div>
      <i className="remove-btn" onClick={handleDelete}>
        {<BsTrashFill />}
      </i>
    </div>
  );
};

export default CartItem;
