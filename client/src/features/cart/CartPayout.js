import React from "react";

const CartPayout = ({ items }) => {
  let totalPrice = 0;
  return (
    <>
      {items.map((item) => {
        totalPrice += item.amount * item.price;
        return (
          <div className="pay-item" key={item._id}>
            <p>
              {item.name}
              <span className="ms-3 fw-bold">x{item.amount}</span>
            </p>
            <p className="text-success">
              {(item.price * item.amount).toFixed(2)}$
            </p>
          </div>
        );
      })}
      <span className="line"></span>
      <div className="pay-item">
        <p className="fw-bold">Total</p>
        <p className="text-success fw-bold">{totalPrice.toFixed(2)}$</p>
      </div>
    </>
  );
};

export default CartPayout;
