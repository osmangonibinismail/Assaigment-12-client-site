import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAllScholarship from "../../../Hooks/useAllScholarship";
import useAuth from "../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { ImSpinner9 } from "react-icons/im";


const CheckoutForm = ({id}) => {

    const [error, setError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [processing, setProcessing] = useState(false);
    const axiosSecure = useAxiosSecure();
    const [cart, refetch] = useCart();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [pay] = useAllScholarship();
    const totalPrice = pay?.applicationFees

    useEffect(() => {
        if (totalPrice > 0) {
            axiosSecure.post('/create-payment-intent', { price: totalPrice })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [axiosSecure, totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            console.log('payment error', error);
            setError(error.message);
        } else {
            console.log('payment-method', paymentMethod);
            setError('');
        }
        // confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if (confirmError) {
            console.log('confirm error');
        }
        else {
            console.log('payment-intent', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                console.log('transaction id', paymentIntent.id);
                setTransactionId(paymentIntent.id);

                // now save the payment in the database
                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transactionId: paymentIntent.id,
                    date: new Date(), // utc date convert. use moment js to
                    cartIds: cart.map(item => item._id),
                    // menuItemIds: cart.map(item => item.menuId),
                    status: 'pending',
                }
                const res = await axiosSecure.post('/payments', payment)
                console.log(' payment saved', res.data);
                refetch();
                if (res.data?.paymentResult?.insertedId) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Thank you for your payment successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(`/applicationForm/${id}`);
                }
            }
        }
    }


    return (

        <>
            <Helmet>
                <title>OAI || Checkout form</title>
            </Helmet>

            <form onSubmit={handleSubmit} className="mt-10">
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-sm btn-primary my-4" type="submit" disabled={!stripe || !clientSecret}>
                    {/* || !clientSecret */}
                    {/* <ImSpinner9 className="m-auto animate-spin"></ImSpinner9> */}
                    Pay
                </button>
                <p className="text-red-600">{error}</p>
                {transactionId && <p className="text-green-500">Your transaction id:{transactionId}</p>}
            </form>
        </>
    )
}

export default CheckoutForm;
