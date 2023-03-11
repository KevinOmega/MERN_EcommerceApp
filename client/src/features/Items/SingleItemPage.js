import React from "react";
import { useParams } from "react-router-dom";
import CartIcon from "../cart/CartIcon";
import CartBtn from "./CartBtn";
import { useGetSingleItemQuery } from "./itemsSlice";

const SingleItemPage = () => {
  const itemID = useParams().itemID;

  const { data: item, isLoading } = useGetSingleItemQuery(itemID);

  if (isLoading) {
    return (
      <div className="section">
        <div className="spinner-border text-dark">
          <span className="visually-hidden">Loading ...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="section fluid-container section single-card-section h-100">
        <div className="card ">
          <div
            className="image"
            style={{ backgroundImage: `url(${item.image})` }}
          ></div>
          <div className="card-body mb-3">
            <h5 className="card-title fs-2">{item.name}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-text mt-3 fw-semibold">Stock : {item.stock}</p>
          </div>
          <div className="card-footer ">
            <p className="text-success">{item.price} $</p>
            <CartBtn itemID={item._id} />
          </div>
        </div>
        <CartIcon />
      </div>
    );
  }
};

export default SingleItemPage;
