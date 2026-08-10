import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; 

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // 🌟 NAYA CODE: REAL-WORLD LOGIC 🌟
  // Agar user pehle se login hai (token hai), toh usko wapas Profile par bhej do
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // replace: true se browser ki history aage badh jati hai, 
      // jisse back button dabane par user loop mein nahi fanstaa.
      navigate('/profile', { replace: true }); 
    }
  }, [navigate]);

  // POST request example (Register)
  async function registerUser() {
    try {
      const response = await fetch(
        "http://localhost:4000/register", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
          }),
        }
      );
      
      const data = await response.json();
      console.log("Register Response:", data);
      
      if (response.ok) {
        localStorage.setItem('civicfix_user', JSON.stringify(data.user));
        // ⚠️ NAYI LINE: Token yahan save hoga
        localStorage.setItem('token', data.token); 
        navigate('/profile');
      } else {
        alert("Registration Failed: " + data.message);
      }
    } catch (error) {
      console.error("Server Error:", error);
      alert("Error: Backend server se connect nahi ho pa raha hai. Ya toh server band hai ya database connect nahi hua.");
    }
  }

  // POST request example (Login)
  async function loginUser() {
    try {
      const response = await fetch(
        "http://localhost:4000/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      
      const data = await response.json();
      console.log("Login Response:", data);

      if (response.ok) {
        localStorage.setItem('civicfix_user', JSON.stringify(data.user));
        // ⚠️ NAYI LINE: Token yahan save hoga
        localStorage.setItem('token', data.token);
        navigate('/profile');
      } else {
        alert("Login Failed: " + data.message);
      }
    } catch (error) {
      console.error("Server Error:", error);
      alert("Error: Backend server se connect nahi ho pa raha hai.");
    }
  }

  // Form Submit Handler
  function handleAuthSubmit(e) {
    e.preventDefault(); 
    if (isLogin) {
      loginUser();
    } else {
      registerUser();
    }
  }

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        <h2 className="auth-logo-header">
          <span className="auth-logo-icon">📍</span> LocalFix
        </h2>
        <h1 className="auth-title">Welcome</h1>
        
        <div className="auth-toggle-container">
          <button 
            type="button" 
            onClick={() => setIsLogin(true)} 
            className={`auth-toggle-btn ${isLogin ? 'active' : 'inactive'}`}
          >
            Sign in
          </button>
          <button 
            type="button" 
            onClick={() => setIsLogin(false)} 
            className={`auth-toggle-btn ${!isLogin ? 'active' : 'inactive'}`}
          >
            Register
          </button>
        </div>

        <form onSubmit={handleAuthSubmit} className="auth-form">
          {!isLogin && (
            <div className="auth-form-group">
              <label>Full name</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} placeholder="John Doe" />
            </div>
          )}
          <div className="auth-form-group">
            <label>Email</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>
          <div className="auth-form-group">
            <label>Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-auth-submit">
            {isLogin ? 'Sign in' : 'Create account'}
          </button>
        </form>

        <div className="auth-back-link">
          <Link to="/">← Back to Home</Link>
        </div>

      </div>
    </div>
  );
}