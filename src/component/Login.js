import React, { useContext } from 'react';
import './Login.css';
import { ThemeContext } from '../context/ThemeProvider';
import { BASE_URL } from '../config';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../context/ContextProvider';


function Login() {
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  const { setToken, setUer } = useContext(DataContext);
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [loginDetails, setLoginDetails] = React.useState({ expiresInMins: 30 });
  const navigate = useNavigate();

  async function loginUser() {
    const url = `${BASE_URL}/auth/login`;
    const payload = loginDetails;
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
        mode: 'cors'
      });
      const data = await response.json();
      if (response.ok) {
        setUer({
          name: data.firstName,
          accessToken: data.accessToken,
          username: data.username,
          userProfile: data.image,
          refreshToken: data.refreshToken
        })
        navigate('/products')
      } else {
        alert("Login failed:", data);
      }
    } catch (error) {
      const dummyAccount = {
        "username": 'emilys',
        "password": 'emilyspass'
      }
      alert(`Error occurred: Tyr with dummy account , ${JSON.stringify(dummyAccount)}`);
    }
  }
  const handleChange = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };


  return (
    <div className={`login-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="neomorph-card">
        <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
        {isSignUp && (
          <input
            type="email"
            placeholder="Email"
            className="neomorph-input"
          />
        )}
        <input type="username" name="username" onChange={handleChange} value={loginDetails.username} placeholder="Username" className="neomorph-input" />
        <input type="password" name="password" onChange={handleChange} value={loginDetails.password} placeholder="Password" className="neomorph-input" />
        {isSignUp && (
          <input type="password" placeholder="Confirm Password" className="neomorph-input" />
        )}
        <button onClick={loginUser} className="neomorph-button">
          {isSignUp ? 'Sign Up' : 'Login'}
        </button>

        <p onClick={() => setIsSignUp(!isSignUp)} className="toggle">
          {isSignUp ? 'Already have an account? Login' : 'Don’t have an account? Sign up'}
        </p>

        <button onClick={toggleMode} className="toggle-mode-btn">
          Switch to {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
}

export default Login;
