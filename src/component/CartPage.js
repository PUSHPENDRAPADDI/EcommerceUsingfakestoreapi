import React, { useContext } from 'react';
import './CartPage.css';
import { DataContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';
import { addToCart, calculateTotal, removeFromCart } from '../context/FuntionComponent';

const CartPage = () => {
    const { totalCost, cartProductList, setCartItemCount, setCartProductList, setTotalCost } = useContext(DataContext);
    const updateQuantity = (prod, type) => {
        let newArray;
        if (type === 'increase') {
            setCartItemCount(prev => prev + 1);
            newArray = addToCart(cartProductList, prod)
        } else if (type === 'decrease') {
            setCartItemCount(prev => prev > 0 && prev - 1);
            newArray = removeFromCart(cartProductList, prod)
        }
        setCartProductList(newArray);
        setTotalCost(calculateTotal(newArray));
    };

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-grid">
                {cartProductList.map(product => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.images[0]} alt={product.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{product.title}</h3>
                            <p>Price: ₹{product.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(product, 'decrease')}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => updateQuantity(product, 'increase')}>+</button>
                            </div>
                            <p>Total: ₹{(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Total: ${totalCost}</h2>
                <Link className='cartLink' to='/checkout'>
                    <button className="checkout-btn">Proceed to Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default CartPage;
