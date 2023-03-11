import React from "react";
import { GrStatusGood } from "react-icons/gr";
import { Link } from "react-router-dom";

const ConfirmationPanel = ({ items }) => {
  let total = 0;
  return (
    <div className="confirmation-panel">
      <div className="header">
        <i>
          <GrStatusGood />
        </i>
        <h2>Successful Purchase</h2>
      </div>
      <div className="center">
        <ul className="items">
          {items.map((item) => {
            total += item.price * item.amount;
            return (
              <li key={item._id}>
                <p>{item.name}</p>
                <p className="text-center">X{item.amount}</p>
                <p className="text-success text-end">{item.price}</p>
              </li>
            );
          })}
        </ul>

        <hr></hr>
        <div className="d-flex justify-content-between">
          <p className="fw-semibold">Total</p>{" "}
          <p className="text-success fw-semibold">{total.toFixed(2)}</p>
        </div>
      </div>
      <Link to={"/"} className="btn btn-dark">
        Kepp Buying
      </Link>
    </div>
  );
};

export default ConfirmationPanel;
