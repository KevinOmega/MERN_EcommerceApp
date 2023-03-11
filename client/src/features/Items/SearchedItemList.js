import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "../../Components/Spinner";
import CartIcon from "../cart/CartIcon";
import Item from "./Item";
import { useGetByNameQuery } from "./itemsSlice";
import { FaRegSadCry } from "react-icons/fa";

import Error from "../../Pages/Error";

const SearchedItemList = () => {
  const itemName = useParams().itemName;

  const { data: items, isLoading } = useGetByNameQuery(itemName);

  if (isLoading) {
    return <Spinner />;
  } else if (items.length > 0) {
    return (
      <div className="container mt-5 text-center min-vh-100 d-flex align-items-center justify-content-center">
        <div className="row row-cols-auto justify-content-center">
          {items.map((item) => (
            <div className="col mb-5" key={item._id}>
              <Item item={item} />
            </div>
          ))}
        </div>
        <CartIcon />
      </div>
    );
  } else {
    return (
      <Error
        message={`No items where founded with '${itemName}'`}
        icon={<FaRegSadCry />}
      />
    );
  }
};

export default SearchedItemList;
