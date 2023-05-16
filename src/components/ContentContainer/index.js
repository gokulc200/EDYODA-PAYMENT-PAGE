import React from "react";

import RadioButtonExample from "../SelectedButton";
import "./index.css";

function ContentContainer() {
  const handleButtonClick = () => {
    window.confirm("Are you sure you want to proceed?");
  };

  return (
    <div className="bg-container">
      <div className="main-lockup">
        <h1 className="header">
          Access curated courses worth ₹{" "}
          <span style={{ textDecoration: "line-through red" }}> 18,500</span> at
          just
          <span style={{ color: "#0096FF" }}> ₹ 99</span> per year!
        </h1>
        <div className="pointers">
          <div className="book-container">
            <img
              src="https://res.cloudinary.com/gokulc/image/upload/v1684263444/Icon_1_v5rqg2.png"
              className="book"
              alt="book"
            />
          </div>
          <div className="text-container">
            <p className="description">
              <span style={{ color: "#0096FF" }}>100+</span> Job Relevant
              Courses
            </p>
          </div>
        </div>
        <div className="pointers">
          <div className="book-container">
            <img
              src="https://res.cloudinary.com/gokulc/image/upload/v1684263767/Icon_4_freg2o.png"
              className="book"
              alt="clock"
            />
          </div>
          <div className="text-container">
            <p className="description">
              <span style={{ color: "#0096FF" }}>20,000+</span> Hours of content
            </p>
          </div>
        </div>
        <div className="pointers">
          <div className="book-container">
            <img
              src="https://res.cloudinary.com/gokulc/image/upload/v1684263444/Icon_2_dgwsvn.png"
              className="book"
              alt="tv"
            />
          </div>
          <div className="text-container">
            <p className="description">
              <span style={{ color: "#0096FF" }}>Exclusive</span> webinar access
            </p>
          </div>
        </div>
        <div className="pointers">
          <div className="book-container">
            <img
              src="https://res.cloudinary.com/gokulc/image/upload/v1684263444/Icon_zp72ce.png"
              className="book"
              alt="scholarship"
            />
          </div>
          <div className="text-container">
            <p className="description">
              Scholarship worth{" "}
              <span style={{ color: "#0096FF" }}>₹ 94,500</span>
            </p>
          </div>
        </div>
        <div className="pointers">
          <div className="book-container">
            <img
              src="https://res.cloudinary.com/gokulc/image/upload/v1684263443/Icon_3_vj8fcq.png"
              className="book"
              alt="ads"
            />
          </div>
          <div className="text-container">
            <p className="description">
              <span style={{ color: "#0096FF" }}>Ad Free</span> learning
              experience
            </p>
          </div>
        </div>
      </div>
      <div className="form">
        <div className="progress-bar">
          <div className="stage1">
            <div className="sign-up">1</div>
            <p className="sign-up-description">Sign Up</p>
          </div>
          <div className="stage2">
            <div className="sign-up">2</div>
            <p className="sign-up-description">Subscribe</p>
          </div>
        </div>
        <div className="form-header">
          <p className="form-header-description">
            Select your subscription plan
          </p>
        </div>
        <div className="input-container">
          <RadioButtonExample />
        </div>
        <div className="button-container">
          <button className="cancel-btn">Cancel</button>
          <button onClick={handleButtonClick} className="proceed-btn">
            Proceed to Pay
          </button>
        </div>
        <div className="razor-pay-container">
          <img
            src="https://res.cloudinary.com/gokulc/image/upload/v1684258885/Frame_12537_azkpmq.png"
            classname="razor-pay-image"
            alt="razor pay"
          />
        </div>
      </div>
    </div>
  );
}

export default ContentContainer;
