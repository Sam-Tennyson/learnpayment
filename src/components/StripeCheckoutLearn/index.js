import StripeCheckout from 'react-stripe-checkout';
import { useState } from 'react';

function StripeCheckoutLearn() {
  const [product, setproduct] = useState({
    name: 'Mouse',
    price: '100',
    productBy: 'Toy'
  })

  const makePayment = (token) => {
    const body = {
      product, token
    }
    const headers = {
      'Content-Type': 'application/json'
    }

    return fetch('http://localhost:5757/payment', {
      method: 'POST',
      body: JSON.stringify(body),
      headers,
    })
    .then(response => {
      console.log(response, "RESPONSE")
      const {status} = response
      console.log(status, 'STATUS')
    })
    .catch(err => console.log(err))
  }

  return (
    <>
        <img src={logo} className="App-logo" alt="logo" />
        <StripeCheckout 
          stripeKey={process.env.REACT_APP_STRIPE_PUBLISH_KEY}
          token={makePayment}
          name='Stripe Karo'
          amount={product.price * 100}
        />
    </>
  );
}

export default StripeCheckoutLearn;
