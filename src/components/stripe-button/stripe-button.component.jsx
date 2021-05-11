import React from 'react';
import StripeCheckout from 'react-stripe-checkout';



const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_NI3Jy5RwX51WdwCGe7aH1ra700vpnjYrAI';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }


  return (
    <StripeCheckout
      label='Pay Now'
      name='Clothes Shop'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}


export default StripeCheckoutButton;

