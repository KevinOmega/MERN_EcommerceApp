import React from "react";

import { useNavigate } from "react-router-dom";
import CartBtn from "./CartBtn";
// import { AiFillHeart } from "react-icons/ai";

const Item = ({ item }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${item._id}`);
  };

  return (
    <div className="card card-item" key={item._id}>
      <div className="card-body" onClick={handleClick}>
        <div
          className="image"
          style={{
            backgroundImage: `url(${item.image})`,
          }}
        ></div>
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">{item.description.substring(0, 80)} ...</p>
        <p className="card-text mt-3 fw-semibold">Stock : {item.stock}</p>
      </div>
      <div className="card-footer">
        <span className="text-success">{item.price}$</span>
        <CartBtn itemID={item._id} />
      </div>
      {/* <span className="hearth">
        <AiFillHeart />
      </span> */}
    </div>
  );
};

export default Item;
