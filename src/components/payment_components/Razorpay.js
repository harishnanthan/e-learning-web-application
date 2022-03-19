import React from "react";
import axios from "axios";
import * as User from "../../helpers/user";
import toast from 'react-hot-toast';

function Razorpay(props) {
    function loadScript(src) {
        return new Promise((resolve) => {
            if(document.getElementById("RZS_SCP")) {
                resolve(true);
            }
            const script = document.createElement("script");
            script.id = "RZS_SCP";
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        let orderData = {
            userId: User.getUserId(),
            courseId: props.props.id
        }

        const result = await axios.post("http://localhost:3000/orders/create");

        let orderId = result.data.order.id;

        const options = {
            key: process.env.REACT_APP_RAZORPAY_KEY,
            amount: props.props.amount,
            currency: "INR",
            name: User.getProfileName(),
            description: props.props.description,
            image: "https://nameless-plateau-81910.herokuapp.com/img/logo.png",
            order_id: result.data.order.id,
            handler: async function (response) {
                const data = {
                    orderCreationId: orderId,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                };

                const result = await axios.post("http://localhost:3000/orders/success", data);

                if(result.data.status === 200) {
                    toast.success('Payment successfull!')
                } else {
                    toast.success('Oops! You order is unsuccessfull!');
                }
            },
            prefill: {
                name: User.getProfileName(),
                email: User.getEmailId(),
            },
            notes: {
                address: "ELearningPlatformByChetta",
            },
            theme: {
                color: "#61dafb",
            },
            modal: {
                "ondismiss": function(){
                    axios.post("http://localhost:3000/orders/update", {orderId, status: "Payment cancelled!"});
                    toast.error("Payment cancelled!")
                 }
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
        paymentObject.on('payment.failed', function (response){
            axios.post("http://localhost:3000/orders/update", {orderId: response.error.metadata.order_id, status: "Payment failed!"});
            toast.error("Payment failed!")
        });
    }

    return (
        <div style={{width: '100%', height: '100%'}} onClick={() => {displayRazorpay()}}>
            <span>{props.props.displayName}</span>
        </div>
    );
}

export default Razorpay;