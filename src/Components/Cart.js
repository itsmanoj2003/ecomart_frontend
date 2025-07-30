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
        city: '',
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
                    const city = res.data.address?.city || res.data.address?.town || res.data.address?.village || '';
                    setOrderdata(prev => ({ ...prev, address, city }));
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

    const handleOrder = (e) => {
        e.preventDefault();

        if (!orderdata.name || !orderdata.mobile || !orderdata.address || !orderdata.city) {
            alert("Please fill in all the required fields.");
            return;
        }

        const cityName = orderdata.city.trim().toLowerCase();
        if (cityName !== 'sankarankovil' && cityName !== 'snkl' && cityName !== 'sangai' && totalPrice <= 1000) {
            alert("Minimum order amount must be more than ₹1000 for your city.");
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

        axios.post("https://ecomart-api-c4er.onrender.com/ecomart/order", updatedOrder)
            .then(res => {
                alert("Order Placed Successfully!");
                clearCart();
                setMsg('Happy Shopping! Your Order is Placed 🌟');
                localStorage.setItem("latestOrder", JSON.stringify(updatedOrder));
                setTimeout(() => {
                    navigate('/ordersuccess');
                }, 1000);
                console.log("Data before sending:", updatedOrder);
            })
            .catch(error => {
                console.error("Order Failed:", error);
                alert("Order Failed! Try Again.");
            });
    };

    return (
        <div className='cart'>
            <div className='cart-deliverymsg'>
                <marquee behavior="scroll" direction="left">
                    Delivery is available only to places near Sankarankovil. [ Places like Kurukkalpatti, Karivalamvandanallur, Thiruvengadam, Kuruvikulam, Veerasigamani, Mullikulam ]
                </marquee>
            </div>
            
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
                            placeholder="Enter Your Address & Town Name"
                            className="cart-address"
                            onChange={handleChange}
                            value={orderdata.address}
                            required
                            rows={3}
                        /><br />
                        <input
                            type='text'
                            name="city"
                            placeholder='Enter Your Town'
                            className='cart-city'
                            onChange={handleChange}
                            value={orderdata.city}
                            required
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
