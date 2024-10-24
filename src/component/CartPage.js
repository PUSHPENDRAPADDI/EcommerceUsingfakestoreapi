import React, { useContext, useEffect, useState } from 'react';
import './CartPage.css';
import { DataContext } from '../context/ContextProvider';

const CartPage = () => {
    const { cartProductList, setCartItemCount, setCartProductList } = useContext(DataContext);
    const combineDuplicates = (data) => {
        const productMap = {};
        data.forEach((product) => {
            if (productMap[product.id]) {
                productMap[product.id].quantity += 1;
            } else {
                productMap[product.id] = { ...product, quantity: 1 };
            }
        });
        return Object.values(productMap);
    };
    const [cart, setCart] = useState([]);
    useEffect(() => {
        setCart(combineDuplicates(cartProductList));
    }, [cartProductList])
    const calculateTotal = () => {
        return cart.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    };
    const updateQuantity = (prod, type) => {
        if (type === 'increase') {
            setCartItemCount(prev => prev + 1);
            setCartProductList(prev => [...prev, prod]);
        } else if (type === 'decrease') {
            setCartItemCount(prev => prev - 1);
            let removedProduct = removeFirstDuplicateById(prod.id);
            setCartProductList(removedProduct);
        }
        const updatedCart = cart.map(product => {
            if (product.id === prod.id) {
                return {
                    ...product,
                    quantity: type === 'increase' ? product.quantity + 1 : product.quantity - 1
                };
            }
            return product;
        });
        setCart(updatedCart.filter(product => product.quantity > 0));
    };

    function removeFirstDuplicateById(id) {
        const index = cartProductList.findIndex(product => product.id === id);
        if (index !== -1) {
            const updatedProducts = [...cartProductList];
            updatedProducts.splice(index, 1);
            return updatedProducts;
        }
    }

    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <div className="cart-grid">
                {cart.map(product => (
                    <div className="cart-item" key={product.id}>
                        <img src={product.image} alt={product.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3>{product.title}</h3>
                            <p>Price: ${product.price}</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(product, 'decrease')}>-</button>
                                <span>{product.quantity}</span>
                                <button onClick={() => updateQuantity(product, 'increase')}>+</button>
                            </div>
                            <p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart-summary">
                <h2>Total: ${calculateTotal()}</h2>
                <button className="checkout-btn">Proceed to Checkout</button>
            </div>
        </div>
    );
};

export default CartPage;
