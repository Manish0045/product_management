import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import './products.css';


function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/products.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching products:", error);  // Enhanced error logging
                setError(error);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error fetching data: {error.message}</p>;

    return (
        <div className="products-grid">
            {products.length > 0 ? (
                products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            ) : (
                <p>No products available.</p>
            )}
        </div>
    );
}

export default Products;
