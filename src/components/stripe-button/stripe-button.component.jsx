import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51I3sXUJT889hwZekhs1KDaJF3Hp1IIssYZT1f5m3SP44GlFKdhhK3J7szXQERA6RUlK8Qyj8d31ma0jzCrZWwMU800ZtI331PN';

    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }

    return (
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is { price: } €`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;