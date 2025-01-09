import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import UseCarts from "../Hooks/UseCarts";
import { authContex } from "../Provider/AuthProvider";

const CheckOut = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState(null);
    const [isProcessing, setIsProcessing] = useState(false);
    const [clientSecret, setClientSecret] = useState('')
    const {user} = useContext(authContex)
    const [transaction, setTransaction] = useState('')


    const axiosSecure = useAxiosSecure()
    const [cart] = UseCarts()

    const totalPrice = cart.reduce( (total, item )=> total + item.price, 0)

    useEffect( ()=> {
        axiosSecure.post('/create-payment-intent',{price: totalPrice})
        .then(res=>{
            console.log(res.data.clientSecret)
            setClientSecret(res.data.clientSecret)
        })
    },[axiosSecure, totalPrice])



    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (!card) {
            setErrorMessage("Card details not entered!");
            return;
        }

        setIsProcessing(true);

        // Create a payment method (example, adjust as per backend setup)
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        });

        if (error) {
            setErrorMessage(error.message);
            console.log(errorMessage)
        } else {
            setErrorMessage(null);
            console.log("Payment Method Created:", paymentMethod);
            // Continue with your server-side handling of the payment
        }

        setIsProcessing(false);

        const {paymentIntent, error: confirmError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details:{
                    email: user?.email || 'anonimous',
                    name: user?.displayName || 'anonimous'
                }
            }
        })

        if(confirmError){
            console.log('confirm error')
        }
        else{
            console.log('payment intent', paymentIntent)
            if(paymentIntent.status === 'succeeded'){
                console.log('transaction id', paymentIntent.id)
                setTransaction(paymentIntent.id)


                const payment = {
                    email: user.email,
                    price: totalPrice,
                    transaction: paymentIntent.id,
                    date: new Date(),
                    cartId: cart.map(item=> item._id),
                    menuItemId: cart.map(item=> item.menuId),
                    status: 'pending'
                }
                const res = await axiosSecure.post('/mayments',payment)
                console.log(res)

                

            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: "16px",
                            color: "#424770",
                            "::placeholder": {
                                color: "#aab7c4",
                            },
                        },
                        invalid: {
                            color: "#9e2146",
                        },
                    },
                }}
            />
            <button className=" btn btn-primary" type="submit" disabled={!stripe || isProcessing || !clientSecret}>
                {isProcessing ? "Processing..." : "Pay"}
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
            {transaction && <p>Your transaction Id:{transaction}</p>}
        </form>
    );
};

export default CheckOut;
