import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner";
import CartPayout from "./CartPayout";
import { useCompleteCheckoutMutation, useGetCartQuery } from "./cartSlice";
import {
  BsPaypal,
  BsFillCreditCard2FrontFill,
  BsFillBagCheckFill,
} from "react-icons/bs";
import CreditCard from "./CreditCard";
import ConfirmationPanel from "./ConfirmationPanel";
import Alert from "./Alert";

const Checkout = () => {
  const [radioValue, setRadioValue] = useState(false);
  const [alert, setAlert] = useState({
    show: false,
    message: "what is going on here",
  });
  const [cardData, setCardData] = useState({
    cardName: "",
    cardNumber: "",
    cardExpiryDate: "",
    cardCVC: "",
  });

  const { data: items, isLoading } = useGetCartQuery();
  const [completeCheckout, { data: response }] = useCompleteCheckoutMutation();

  const onRadioBtnChange = (e) => {
    setRadioValue(e.target.value);
  };

  const handleCompleteCheckout = () => {
    if (radioValue) {
      if (radioValue === "card") {
        const { cardName, cardNumber, cardExpiryDate, cardCVC } = cardData;

        if (
          cardName &&
          cardNumber.length === 18 &&
          cardExpiryDate.length === 4 &&
          cardCVC.length >= 3
        ) {
          completeCheckout(items);
        } else {
          setAlert({
            show: true,
            message: "Invalid data in the card credit information",
          });
        }
      } else {
        completeCheckout(items);
      }
    } else {
      setAlert({
        ...alert,
        show: true,
        message: "Please select a payment method",
      });
    }
  };

  useEffect(() => {
    if (alert.show) {
      let timer = setTimeout(() => setAlert({ ...alert, show: false }), 2000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [alert]);

  let render = "";

  if (isLoading) {
    render = <Spinner />;
  } else {
    render = (
      <div className="checkout-section">
        <div className="checkout-header">
          <i>
            <BsFillBagCheckFill />
          </i>
          <h1>Checkout</h1>
        </div>
        <div className="checkout-section-center">
          <div className="payment-methods">
            <h3>Payment Methods</h3>
            <div className="radio-item">
              <input
                type="radio"
                id="card"
                name="payment-method"
                onChange={onRadioBtnChange}
                value="card"
              />
              <i>
                <BsFillCreditCard2FrontFill />
              </i>
              <label htmlFor="card">Credit/Debit Card</label>
            </div>
            <CreditCard
              cardIsChecked={radioValue === "card"}
              setCardData={setCardData}
              cardData={cardData}
            />
            <div className="radio-item">
              <input
                type="radio"
                id="paypal"
                name="payment-method"
                onChange={onRadioBtnChange}
                value="paypal"
              />
              <i>
                <BsPaypal />
              </i>
              <label htmlFor="paypal">Paypal</label>
            </div>
          </div>
          <div className="cart-pay-section">
            <CartPayout items={items} />
            <button
              className="btn btn-primary p-3"
              onClick={handleCompleteCheckout}
            >
              Complete Checkout
            </button>
          </div>
        </div>
        {response && <ConfirmationPanel items={response} />}
        <Alert message={alert.message} show={alert.show} />
      </div>
    );
  }

  return render;
};

export default Checkout;
