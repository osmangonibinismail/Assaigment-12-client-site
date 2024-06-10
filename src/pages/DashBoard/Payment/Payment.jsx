import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useParams } from "react-router-dom";


// todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  const {id} = useParams();
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CheckoutForm id={id}></CheckoutForm>
      </Elements>
    </div>
  )
}

export default Payment
