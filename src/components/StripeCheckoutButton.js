import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_TppDF6AQWFbnKVWuLRtSvdtU002PINObpa';

    const onToken = token => {
        console.log(token);
        // alert('Payment Succesful!');
        toast.success("payment sucessfully", {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
    };

    return (
        <StripeCheckout
            label='Pay Now'
            name='bhupi store'
            billingAddress
            shippingAddress
            image='assets/bhupi.jpg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;