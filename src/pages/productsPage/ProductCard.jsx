// src/components/ProductCard.jsx
import React from 'react';
import { useCart } from '../../context/CartContext';
import './productCard.css';


function ProductCard({ product }) {
    const { dispatch } = useCart();

    const addToCart = () => {
        dispatch({ type: 'ADD_TO_CART', product });
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default ProductCard;
