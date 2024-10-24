import React, { useContext } from 'react';
import './Header.css';
import { DataContext } from '../context/ContextProvider';
import { ThemeContext } from '../context/ThemeProvider';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const { token, setToken, user, cartItemCount, setCartItemCount } = useContext(DataContext);
    const { isDarkMode, toggleMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        setToken(null);
        setCartItemCount(0);
        navigate('/');
    }
    return (
        <header className="header">
            <h1 className="logo">My Store</h1>
            <div className="header-options">
                <div className="profile">
                    {token !== null ? (
                        <>
                            <span className="username">{user}</span>
                            <button onClick={handleLogout} className="logout-btn">Logout</button>
                        </>
                    ) : (
                        <button onClick={() => navigate('/')} className="login-btn">Login</button>
                    )}
                </div>
                <Link className='cartLink' to={'/cartPage'}>
                    <div className="cart">
                        <span className="cart-count">{cartItemCount} in cart</span>
                    </div>
                </Link>
                <button onClick={toggleMode} className="toggle-theme-btn">
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
            </div>
        </header>
    );
};

export default Header;
