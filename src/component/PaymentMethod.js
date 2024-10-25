import React, { useState } from "react";
import "./PaymentMethod.css";

const PaymentMethod = () => {
    const [selectedMethod, setSelectedMethod] = useState("");

    const handleSelectMethod = (method) => {
        setSelectedMethod(method);
    };

    const handlePayment = () => {
        if (!selectedMethod) {
            alert("Please select a payment method!");
            return;
        }
        alert(`Payment method ${selectedMethod} selected. Proceeding with payment.`);
    };

    return (
        <div className="payment-container">
            <h1 className="payment-title">Choose Payment Method</h1>
            <div className="payment-options">
                <div
                    className={`payment-card ${selectedMethod === "Credit Card" ? "selected" : ""}`}
                    onClick={() => handleSelectMethod("Credit Card")}
                >
                    Credit Card
                </div>
                <div
                    className={`payment-card ${selectedMethod === "Debit Card" ? "selected" : ""}`}
                    onClick={() => handleSelectMethod("Debit Card")}
                >
                    Debit Card
                </div>
                <div
                    className={`payment-card ${selectedMethod === "PayPal" ? "selected" : ""}`}
                    onClick={() => handleSelectMethod("PayPal")}
                >
                    PayPal
                </div>
                <div
                    className={`payment-card ${selectedMethod === "UPI" ? "selected" : ""}`}
                    onClick={() => handleSelectMethod("UPI")}
                >
                    UPI
                </div>
            </div>
            <div class="credit-card-preview">
                <div class="card-number">•••• •••• •••• 1234</div>
                <div class="card-holder">
                    <div class="card-name">John Doe</div>
                    <div class="card-expiry">12/25</div>
                </div>
            </div>

            <form class="credit-card-form">
                <input type="text" class="input-field" placeholder="Card Number" maxlength="16" />
                <input type="text" class="input-field" placeholder="Cardholder Name" />
                <div style={{ display: 'flex', gap: "10px" }}>
                    <input type="text" class="input-field" placeholder="MM/YY" maxlength="5" style={{ "flex": 1 }} />
                    <input type="text" class="input-field" placeholder="CVV" maxlength="3" style={{ "flex": 1 }} />
                </div>
            </form>
            <button className="pay-button" onClick={handlePayment}>
                Pay Now
            </button>
        </div>
    );
};

export default PaymentMethod;
