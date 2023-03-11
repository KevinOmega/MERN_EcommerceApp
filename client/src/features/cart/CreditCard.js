import React, { useState } from "react";

const CreditCard = ({ cardIsChecked, setCardData, cardData }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");

  const onCardNumberChange = (e) => {
    let value = e.target.value;

    value = value.replaceAll(" ", "");

    if (!/\D/.test(value) && value.length <= 16) {
      value = value.replace(/\d{4}(?=.)/g, "$& ");
      setCardNumber(value);
      setCardData({ ...cardData, cardNumber });
    }
  };

  const onCardCVCChange = (e) => {
    let value = e.target.value;
    if (!/\D/g.test(value) && value.length <= 4) {
      setCardCVC(value);
      setCardData({ ...cardData, cardCVC });
    }
  };

  const onCardExpiryDateChange = (e) => {
    let value = e.target.value;
    value = value.replace("/", "");
    if (!/\D/.test(value) && value.length <= 4) {
      if (value.length > 2) {
        value = value.replace(/\d{2}/, "$&/");
      }
      setCardExpiryDate(value);
      setCardData({ ...cardData, cardExpiryDate });
    }
  };

  return (
    <div className={`card-information-wrapper ${cardIsChecked && "active"}`}>
      <div className="card-information">
        <div className="card-input">
          <label htmlFor="card-name">Name on card</label>
          <input
            type="text"
            id="card-name"
            placeholder="Name on card"
            value={cardData.cardName}
            onChange={(e) =>
              setCardData({ ...cardData, cardName: e.target.value })
            }
          />
        </div>
        <div className="card-input">
          <label htmlFor="card-number">Card Number</label>
          <input
            type="text"
            id="card-number"
            placeholder="0000 0000 0000 0000"
            value={cardNumber}
            onChange={onCardNumberChange}
          />
        </div>
        <div className="card-security-info">
          <div className="card-input">
            <label htmlFor="cvc">CVC/CVV</label>
            <input
              type="text"
              id="cvc"
              placeholder="CVC"
              value={cardCVC}
              onChange={onCardCVCChange}
            />
          </div>
          <div className="card-input">
            <label htmlFor="date">Expiry date</label>
            <input
              type="text"
              id="date"
              placeholder="MM/YY"
              value={cardExpiryDate}
              onChange={onCardExpiryDateChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
