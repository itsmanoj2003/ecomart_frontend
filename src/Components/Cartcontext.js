import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    // Here prevCart is an array and the product is the object

    const addToCart = (product) => {            
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item._id === product._id);
            if (existingItem) {
                return prevCart.map(item =>
                    item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                alert('Product Added to Cart...');
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };
    
    const removeFromCart = (productId, removeAll = false) => {
        setCart(prevCart => {
            if (removeAll) {
                alert('Product Removed from Cart...');
                return prevCart.filter(item => item._id !== productId); // Remove item completely
            }
            return prevCart.map(item =>
                item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
            ).filter(item => item.quantity > 0);
        });
    };

    const clearCart = () => {
        setCart([]);
    };
    
    
    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart ,clearCart}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
