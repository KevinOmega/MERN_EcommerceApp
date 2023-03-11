import React from "react";

const Website = () => {
  return (
    <div className="about-website bg-dark">
      <div className="about-center">
        <div className="about-info">
          <div className="about-page-header">
            <h1>About the WebSite</h1>
          </div>
          <div className="about-page-center">
            <p>
              This is just a sample page, the only purpose of this website is to
              show my skills, so please don't worry when completing a product
              purchase (you don't need to fill in your real card values because
              it's just a sample website ) I hope you like this website and if
              you would like a similar website for your business, please feel
              free to contact me, you can find how to get contact with me in the
              About Developer section below.
            </p>
            <a
              href="#developer-section"
              className="btn btn-light mt-5 fw-semibold px-3 py-2"
            >
              About the Developer
            </a>
          </div>
        </div>
        <div className="coffee-container">
          <div className="cup">
            <div className="top">
              <div className="vapour">
                <span style={{ "--i": 15 }}></span>
                <span style={{ "--i": 19 }}></span>
                <span style={{ "--i": 2 }}></span>
                <span style={{ "--i": 17 }}></span>
                <span style={{ "--i": 3 }}></span>
                <span style={{ "--i": 5 }}></span>
                <span style={{ "--i": 7 }}></span>
                <span style={{ "--i": 20 }}></span>
                <span style={{ "--i": 9 }}></span>
                <span style={{ "--i": 10 }}></span>
                <span style={{ "--i": 4 }}></span>
                <span style={{ "--i": 13 }}></span>
                <span style={{ "--i": 1 }}></span>
                <span style={{ "--i": 12 }}></span>
                <span style={{ "--i": 14 }}></span>
                <span style={{ "--i": 8 }}></span>
                <span style={{ "--i": 16 }}></span>
                <span style={{ "--i": 18 }}></span>
                <span style={{ "--i": 11 }}></span>
                <span style={{ "--i": 6 }}></span>
              </div>
              <div className="circle">
                <div className="coffee"></div>
              </div>
            </div>
            <div className="handle"></div>
          </div>
          <div className="plate"></div>
        </div>
      </div>
    </div>
  );
};

export default Website;
