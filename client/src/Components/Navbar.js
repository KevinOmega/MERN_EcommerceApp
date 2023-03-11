import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { useGetUserIdQuery } from "../features/user/userSlice";
import { useLogOutMutation } from "../features/auth/authSlice";

const Navbar = () => {
  const { data: userId } = useGetUserIdQuery();
  const [itemSearch, setItemSearch] = useState(localStorage.getItem("name"));

  const [logOut] = useLogOutMutation();

  const navigate = useNavigate();

  const handleLogout = async () => {
    await logOut().then(() => navigate("/"));
  };

  const onSearchChange = (e) => {
    setItemSearch(e.target.value);
  };

  const onSearchBtn = () => {
    localStorage.setItem("name", itemSearch);
    navigate(`/search/${itemSearch}`);
  };

  return (
    <nav className="navbar navbar-expand-md d-flex align-items-center">
      <div className="container-fluid ">
        <Link
          to={"/"}
          className="navbar-brand h1 ms-3 fs-4 fw-semibold fst-italic"
        >
          Ecommerce
        </Link>
        <button
          className="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-between px-3"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link to="/" className="nav-link active">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active">
                About
              </Link>
            </li>
          </ul>
          <div className="navbar-center d-flex flex-column flex-md-row ">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={itemSearch}
                onChange={onSearchChange}
              />
              <button
                className="btn btn-outline-success"
                type="submit"
                onClick={onSearchBtn}
              >
                Search
              </button>
            </form>
            {userId !== "0" ? (
              <>
                <div className="nav-cart-icon">
                  <Link to={"/cart"}>
                    <i className="me-5 text-dark ms-5">
                      <BsFillCartFill />
                    </i>
                  </Link>
                </div>
                <button className="btn btn-dark" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <Link to={"/login"} className="btn btn-dark ms-lg-3">
                Log In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
