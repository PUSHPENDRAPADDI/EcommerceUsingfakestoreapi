import React, { useContext, useEffect, useState } from 'react';
import './Product.css';
import { DataContext } from '../context/ContextProvider';
import { BASE_URL } from '../config';

const ProductPage = () => {

    const { setCartItemCount, setCartProductList } = useContext(DataContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(`${BASE_URL}/products`)
            .then((res) => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching product:', error);
                setLoading(false);
            });
    }, []);
    const handleAddToCart = (prod) => {
        setCartItemCount(prev => prev + 1);
        setCartProductList(prev => [...prev, prod]);
    };

    const handleBuyNow = (prod) => {

    };
    if (loading) {
        return (
            <div class="loader-container">
                <div class="loader"></div>
            </div>)
    } else {
        return (
            <div className="product-page">
                <h1 className="page-title">Our Products</h1>
                <div className="product-grid">
                    {product.map((product) => (
                        <div key={product.id} className="product-card">
                            <img src={product.image} alt={product.title} className="product-image" />
                            <div className="product-details">
                                <h2 className="product-title">{(product.title).substring(0, 60)}</h2>
                                <p className="product-price">{product.price}</p>
                                <p className="product-category">{product.category}</p>
                                <div className="button-container">
                                    <button className="btn add-to-cart" onClick={() => handleAddToCart(product)}>
                                        Add to Cart
                                    </button>
                                    <button className="btn buy-now" onClick={() => handleBuyNow(product.id)}>
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default ProductPage;
