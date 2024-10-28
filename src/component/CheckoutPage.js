import React, { useContext, useState } from 'react';
import './CheckoutPage.css'
import { DataContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';

const CheckoutPage = () => {
    const { totalCost, cartProductList } = useContext(DataContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null)

    const handleOpenModal = (img) => {
        setCurrentImage(img);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="checkout-container">
            <h1 className="checkout-title">Checkout Summary</h1>
            <div className="cart-items">
                {cartProductList.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    cartProductList.map((item) => (
                        <div key={item.id} className="cart-item">
                            <img
                                src={item.thumbnail}
                                alt={item.title}
                                className="cart-item-image"
                                onClick={() => handleOpenModal(item)}
                            />
                            <div className="cart-item-details">
                                <h3 className="cart-item-title">{item.title}</h3>
                                <p className="cart-item-price">$ {item.price}</p>
                                <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))
                )}
                {isModalOpen && currentImage && (
                    <div className="image-modal">
                        <div className="modal-content">
                            <button className="close-btn" onClick={handleCloseModal}>✕</button>
                            <img src={currentImage.images[0]} alt={currentImage.title} className="modal-image" />
                        </div>
                    </div>
                )}
            </div>
            <div className="checkout-summary">
                <div className="checkout-summay-inner">
                    <p className="total-label">Total:</p>
                    <p className="total-amount">$ {totalCost}</p>
                </div>
                <Link className='cartLink' to={'/paymentMethod'}>
                    <button className="checkout-button">Proceed to Payment</button>
                </Link>
            </div>
        </div>
    );
};

export default CheckoutPage;
