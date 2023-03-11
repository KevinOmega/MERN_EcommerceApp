import React from "react";
import { Link } from "react-router-dom";

const Error = ({ message, icon }) => {
  return (
    <div className="container-fluid error-page">
      <i>{icon}</i>
      <h1>{message}</h1>
      <Link to={"/"} className="btn btn-dark">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
