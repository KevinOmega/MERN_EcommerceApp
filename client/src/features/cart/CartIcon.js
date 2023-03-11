import React from "react";

import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useGetUserIdQuery } from "../user/userSlice";

const CartIcon = () => {
  const { data: userId } = useGetUserIdQuery();

  if (userId !== "0") {
    return (
      <div className="cart-icon invisible">
        <Link to={"/cart"}>
          <i className="me-5 text-dark ms-5">
            <BsFillCartFill />
          </i>
        </Link>
      </div>
    );
  } else {
    return <></>;
  }
};

export default CartIcon;
