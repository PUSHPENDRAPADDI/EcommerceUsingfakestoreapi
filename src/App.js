import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/Login';
import { ThemeContext } from './context/ThemeProvider';
import ProductPage from './component/Product';
import Header from './component/Header';

function App() {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? 'dark' : 'light'}`}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/products" element={<ProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
