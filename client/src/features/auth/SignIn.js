import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRegisterMutation } from "./authSlice";

const SignIn = () => {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");
  const [feedback, setFeedback] = useState({
    show: false,
    message: "",
  });

  const [register, { data, isLoading, isUninitialized, isSuccess }] =
    useRegisterMutation();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 5) {
      setFeedback({
        ...feedback,
        show: true,
        message: "THe username should have at least 5 characters",
      });
    } else if (password.length < 8) {
      setFeedback({
        ...feedback,
        show: true,
        message: "The password should have at least 8 characters",
      });
    } else {
      await register({ username, password });
    }
  };

  useEffect(() => {
    if (!isUninitialized && !isLoading) {
      if (isSuccess) {
        if (data.name === "success") {
          navigate("/");
        }
      } else {
        setFeedback({
          ...feedback,
          show: true,
          message: "This username is already in use",
        });
      }
    }
  }, [isLoading, isUninitialized, isSuccess, navigate, data, feedback]);

  return (
    <div className="form-section mw-100 min-vh-100 d-flex flex-column justify-content-center align-items-center">
      <div className="form-section-center">
        <h1 className="mb-4 text-start fw-bold">Sign In</h1>
        <form>
          <div className="form-item mb-3">
            <label htmlFor="username " className="form-label fw-semibold">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setusername(e.target.value.trim())}
            />
          </div>
          <div className="form-item mb-4">
            <label htmlFor="password" className="form-label fw-semibold">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {feedback.show && (
            <p className="text-danger mb-4" style={{ fontSize: "0.9rem" }}>
              {feedback.message}
            </p>
          )}
          <button className="btn btn-dark " onClick={handleSubmit}>
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
