import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Ordersuccess.css';

export default function OrderSuccess() {
    const navigate = useNavigate();

    return (
        <div className="order-success">
            <div className="success-box">
                <div className="success-icon">✔</div>
                <h1>Order Placed Successfully!</h1>
                <p>Your order has been confirmed. We will deliver it soon. 🛵</p>
                <div className="buttons">
                    <button className="view-bill" onClick={() => navigate('/bill')}>Download Bill</button>
                    <button className="home-btn" onClick={() => navigate('/')}>Continue Shopping</button>
                </div>
            </div>
        </div>
    );
}

