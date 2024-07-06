import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Assuming use of react-router-dom for navigation
import "./Css/Login.css";
import base_url from '../Api/bootApi';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

const nevigate = useNavigate();


  const login = async () => {
    try {
    //   const baseUrl = process.env.REACT_APP_API_BASE_URL; // Replace with your actual API base URL
      const response = await axios.get(`${base_url}/user/?email=${email}&password=${password}`);

      if (response.status === 200) {
        localStorage.setItem('user-info', JSON.stringify(response.data));
        nevigate('/home'); // Assuming use of useNavigate from react-router-dom v6
      } else {
        console.warn('Login failed:', response);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  useEffect(() => {
    const user = localStorage.getItem('user-info');
    if (user) {
        nevigate('/home'); // Redirect to Home on successful login
    }
  }, []);

  return (
    <div className="login-container">
      <img className="logo" src="../assets/logo.png" alt="" />
      <h1>Login</h1>
      <div className="login-form">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter Email"
          className="login-input"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter Password"
          className="login-input"
        />
        <button onClick={login} className="login-button">
          Login
        </button>
      </div>
      <p>
        <Link to="/sign-up" className="signup-link">
          SignUp
        </Link>
      </p>
    </div>
  );
};

export default Login;
