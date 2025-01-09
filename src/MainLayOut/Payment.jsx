import { Elements } from "@stripe/react-stripe-js";
import SectionTitlel from "../components/SectionTitlel";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";

// Initialize Stripe with your publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_KEY);

const Payment = () => {
    return (
        <div>
            <div>
                <SectionTitlel Heading="Payment" subHeading="Please pay to eat" />
            </div>
            <Elements stripe={stripePromise}>
                <CheckOut />
            </Elements>
        </div>
    );
};

export default Payment;
