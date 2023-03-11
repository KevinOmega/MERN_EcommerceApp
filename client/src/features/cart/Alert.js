import React, { useEffect, useRef } from "react";

const Alert = ({ show, message }) => {
  const alertRef = useRef();

  useEffect(() => {
    const width = alertRef.current.getBoundingClientRect().width;
    if (!show) {
      alertRef.current.style.transform = `translateX(${width}px)`;
      alertRef.current.style.opacity = "0";
    } else {
      alertRef.current.style.transform = `translateX(${-10}px)`;
      alertRef.current.style.opacity = "1";
    }
  }, [show]);

  return (
    <div className="bg-danger p-3 alert" ref={alertRef}>
      <p className="text-light">{message}</p>
    </div>
  );
};

export default Alert;
