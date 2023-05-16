import React, { useState } from "react";
import { BsClockHistory } from "react-icons/bs";
import "./index.css";

const RadioButtonExample = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [amountA, setAmount] = useState(0);
  const [originalAmount, setOriginalAmount] = useState("");

  const handleOptionChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Calculate amount based on selected option
    let newAmount = 0;
    let originalAmount = "";
    if (selectedValue === "option1") {
      newAmount = 99;
      originalAmount = "18,301";
    } else if (selectedValue === "option2") {
      newAmount = 179;
      originalAmount = "18,321";
    } else if (selectedValue === "option3") {
      newAmount = 149;
      originalAmount = "18,351";
    } else if (selectedValue === "option4") {
      newAmount = 99;
      originalAmount = "18,301";
    }

    setAmount(newAmount);
    setOriginalAmount(originalAmount);
  };

  return (
    <div>
      <label className="text-field-container1">
        <input
          type="radio"
          value="option1"
          disabled
          checked={selectedOption === "option1"}
          onChange={handleOptionChange}
          className="button"
        />
        <div className="subscription-container">
          <p className="no-subscription-details">12 Months Subscription</p>
          <div className="offer-expired-container">
            <p className="offer-expired-description">Offer Expired</p>
          </div>
          <div className="right-text-container">
            <div className="top-text">
              <p className="no-total-description">Total</p>
              <p className="no-amount-description">₹99</p>
            </div>
            <div className="bottom-text">
              <p className="no-per-month-description">₹8 </p>
              <p className="month-description">/mon</p>
            </div>
          </div>
        </div>
      </label>

      <label className="text-field-container2 radio-button">
        <input
          type="radio"
          value="option2"
          checked={selectedOption === "option2"}
          onChange={handleOptionChange}
          className="button tick"
        />
        <img src="https://res.cloudinary.com/gokulc/image/upload/v1684265051/Vector_3_jimmi9.png" alt="Overlay" className="overlay"/>
        <div className="subscription-container">
          <p className="subscription-details">12 Months Subscription</p>
          <div className="recommended-container">
            <p className="offer-expired-description">Recommended</p>
          </div>
          <div className="right-text-container">
            <div className="top-text">
              <p className="total-description">Total</p>
              <p className="amount-description">₹179</p>
            </div>
            <div className="bottom-text">
              <p className="per-month-description">₹15 </p>
              <p className="month-description">/mon</p>
            </div>
          </div>
        </div>
      </label>

      <label className="text-field-container3">
        <input
          type="radio"
          value="option3"
          checked={selectedOption === "option3"}
          onChange={handleOptionChange}
          className="button"
        />
        <div className="subscription-container">
          <p className="subscription-details">6 Months Subscription</p>
          <div className="right-text-container">
            <div className="top-text">
              <p className="total-description">Total</p>
              <p className="amount-description">₹149</p>
            </div>
            <div className="bottom-text">
              <p className="per-month-description">₹25 </p>
              <p className="month-description">/mon</p>
            </div>
          </div>
        </div>
      </label>

      <label className="text-field-container3">
        <input
          type="radio"
          value="option4"
          checked={selectedOption === "option4"}
          onChange={handleOptionChange}
          className="button"
        />
        <div className="subscription-container">
          <p className="subscription-details">3 Months Subscription</p>
          <div className="right-text-container">
            <div className="top-text">
              <p className="total-description">Total</p>
              <p className="amount-description">₹99</p>
            </div>
            <div className="bottom-text">
              <p className="per-month-description">₹33 </p>
              <p className="month-description">/mon</p>
            </div>
          </div>
        </div>
      </label>

      <hr />

      <div className="summary-container">
        <div className="text-fee-container">
          <p className="fee-description">Subscription Fee</p>
          <p className="original-amount-description">₹18,500</p>
        </div>
        <div className="alert-container">
          <div className="alert-header-container">
            <p className="limited-offer-description">Limited time Offer</p>
            <p className="original-amount-description">- ₹{originalAmount}</p>
          </div>
          <div className="alert-body-container">
            <BsClockHistory className="clock" />
            <p className="offer-description">
              Offer valid till 25th March 2023
            </p>
          </div>
        </div>
        <div className="text-fee-container">
          <p className="fee-description">
            <b>Total </b>(Incl. of 18% GST)
          </p>
          <p className="final-amount-description">₹{amountA}</p>
        </div>
      </div>
    </div>
  );
};

export default RadioButtonExample;
