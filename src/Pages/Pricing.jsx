import { useState } from "react";
import PaymentMethod from "../Components/PaymentMethod";
import { Route, Routes } from "react-router-dom";
import PricingDetails from "../Components/PricingDetails";
// import { useNavigationType } from "react-router-dom";

const Pricing = () => {

    const [paymentPlan, setPaymentPlan] = useState(() => {
        return localStorage.getItem('paymentPlan') || 'basic'
    })

    const [continueClicked, setContinueClicked] = useState(false)

    return (
        <div>
            <Routes>
                <Route index element={<PricingDetails setPaymentPlan={setPaymentPlan} />} />
                <Route path='payment' element={<PaymentMethod paymentPlan={paymentPlan} continueClicked={continueClicked} setContinueClicked={setContinueClicked} />} />
            </Routes>
        </div>
    )
}

export default Pricing