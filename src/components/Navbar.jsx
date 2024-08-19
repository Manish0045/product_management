import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './navbar.css';

function Navbar() {
    const { state } = useCart();
    const cartCount = state.cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="navbar">
            <div className="navBar_left"><Link to="/">Left Part</Link></div>
            <div className="navBar_right">
                <ul className="navList">
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/cart">CART ({cartCount})</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
