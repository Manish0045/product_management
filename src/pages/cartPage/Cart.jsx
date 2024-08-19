import React from 'react';
import { useCart } from '../../context/CartContext';
import "./cart.css";

function Cart() {
    const { state, dispatch } = useCart();

    const handleRemove = (id) => {
        dispatch({ type: 'REMOVE_FROM_CART', id });
    };

    const handleQuantityChange = (id, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', id, quantity });
    };

    return (
        <div className="cart-container">
            <h2>Your Cart</h2>
            {state.cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul>
                    {state.cart.map(item => (
                        <li key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <div>
                                <h3>{item.name}</h3>
                                <p>${item.price.toFixed(2)}</p>
                                <div>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                                </div>
                                <button onClick={() => handleRemove(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
            <div>
                <h3>Subtotal: ${state.cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</h3>
            </div>
        </div>
    );
}

export default Cart;
