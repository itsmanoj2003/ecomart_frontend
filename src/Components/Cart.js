import { useCart } from './Cartcontext';
import './Cart.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
    const navigate = useNavigate();
    const { cart, addToCart, removeFromCart, clearCart } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.pprice * item.quantity, 0);

    const [msg, setMsg] = useState('Your Cart is Empty');

    const [orderdata, setOrderdata] = useState({
        name: '',
        mobile: '',
        address: '',
        items: [],
        total: 0
    });

    const handleChange = (e) => {
        setOrderdata({ ...orderdata, [e.target.name]: e.target.value });
    };

    const handleLocation = () => {
        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const { latitude, longitude } = position.coords;
                try {
                    const res = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`);
                    const address = res.data.display_name || '';
                    if (address) {
                        setOrderdata(prev => ({ ...prev, address }));
                    } else {
                        alert("Couldn't fetch address from location.");
                    }
                } catch (err) {
                    console.error(err);
                    alert("Failed to fetch location.");
                }
            },
            () => {
                alert("Unable to retrieve your location.");
            }
        );
    };

    const handleOrder = async (e) => {
        e.preventDefault();

        if (!orderdata.name || !orderdata.mobile || !orderdata.address) {
            alert("Please fill in all the required fields.");
            return;
        }

        const updatedOrder = {
            ...orderdata,
            items: cart.map(item => ({
                pname: item.pname,
                pprice: item.pprice,
                quantity: item.quantity,
                subtotal: item.pprice * item.quantity
            })),
            total: totalPrice
        };

        setOrderdata(updatedOrder);

        try {
            await axios.post("http://localhost:3001/ecomart/order", updatedOrder);
            alert("Order Placed Successfully!");
        } catch (error) {
            console.error("Order Failed:", error);
            alert("Order Failed! Try Again.");
        }
        clearCart();
        setMsg('Happy Shopping! Your Order is Placed 🌟');
        localStorage.setItem("latestOrder", JSON.stringify(updatedOrder));
        setTimeout(() => {
            navigate('/ordersuccess');
        }, 1000);
    };

    return (
        <div className='cart'>
            <div className="cart-page">
                <h1 className="cart-title">Your Cart</h1>
                {cart.length === 0 ? (
                    <p className="empty-cart">{msg}</p>
                ) : (
                    <form className='cart-form' onSubmit={(e) => e.preventDefault()}>
                        <input
                            type='text'
                            name="name"
                            placeholder='Enter Your Name'
                            className='cartform-name'
                            onChange={handleChange}
                            required
                        /><br />
                        <input
                            type='number'
                            name="mobile"
                            placeholder='Enter Your Mobile Number'
                            className='cart-mobilenumber'
                            onChange={handleChange}
                            required
                        /><br />
                        <textarea
                            name="address"
                            placeholder="Enter Your Address"
                            className="cart-address"
                            onChange={handleChange}
                            value={orderdata.address}
                            required
                            rows={3}
                        /><br />
                        <button type="button" className="get-location-btn" onClick={handleLocation}>
                        🎯 Use My Location
                        </button><br />
                        <div className="cart-items">
                            {cart.map((item, index) => (
                                <div key={index} className="cart-item">
                                    <img src={item.pimg} className="cart-image" alt={item.pname} />
                                    <div className="cart-item-details">
                                        <h3>{item.pname}</h3>
                                        <p>Price: Rs.{item.pprice}</p>
                                        <div className="quantity-container">
                                            <button type="button" className="qty-btn" onClick={() => removeFromCart(item._id)}>-</button>
                                            <span className="quantity">{item.quantity}</span>
                                            <button type="button" className="qty-btn" onClick={() => addToCart(item)}>+</button>
                                        </div>
                                        <p className="subtotal">Subtotal: Rs.{item.pprice * item.quantity}</p>
                                        <button type="button" className="remove-btn" onClick={() => removeFromCart(item._id, true)}>Remove</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <input type="hidden" name="items" value={JSON.stringify(orderdata.items)} />
                        <input type="hidden" name="total" value={orderdata.total} />
                        <h2 className="total-price">Total Price: Rs.{totalPrice}</h2>
                        <button type="submit" onClick={handleOrder} className='order-btn'>Place An Order</button>
                    </form>
                )}
            </div>
        </div>
    );
}
