import React from "react";
import "./stripe-button.scss";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_r71CrKLvadFk7lyrBcHycMCB00QjAtv0uI";

  const onToken = () => alert("Payment Sucessful.");
  return (
    <StripeCheckout
      label="Pay Now"
      name="Crown Clhothing Ltd"
      billingAddress
      shippingAdress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
