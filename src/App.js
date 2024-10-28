import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import { ThemeContext } from './context/ThemeProvider';
import ProductPage from './component/Product';
import Header from './component/Header';
import CartPage from './component/CartPage';
import CheckoutPage from './component/CheckoutPage';
import PaymentMethod from './component/PaymentMethod';
import ProductDetails from './component/ProductDetails';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/productDetails" element={<ProductDetails />} />
          <Route path='/cartPage' element={<CartPage />} />
          <Route path='/checkout' element={<CheckoutPage />} />
          <Route path='/paymentMethod' element={<PaymentMethod />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
