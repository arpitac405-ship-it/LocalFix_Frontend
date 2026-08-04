import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css'; // <-- CSS File Import ki

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); 
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAuthSubmit = async (e) => {
    e.preventDefault(); 
    
    if (!isLogin) {
      

      // Fallback for UI testing 
      const dummyUser = { name: name || 'Test User', email: email };
      localStorage.setItem('civicfix_user', JSON.stringify(dummyUser));
      navigate('/profile');

    } else {
      // LOGIN LOGIC - Mocked for UI testing
      const dummyUser = { name: 'Test User', email: email };
      localStorage.setItem('civicfix_user', JSON.stringify(dummyUser));
      navigate('/profile');
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-card">
        
        <h2 className="auth-logo-header">
          {/* Branding updated to LocalFix */}
          <span className="auth-logo-icon">📍</span> LocalFix
        </h2>
        <h1 className="auth-title">Welcome</h1>
        <p className="auth-subtitle">Sign in to file and track complaints.</p>

        {/* Toggle Buttons */}
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

        {/* Auth Form */}
        <form onSubmit={handleAuthSubmit} className="auth-form">
          
          {!isLogin && (
            <div className="auth-form-group">
              <label>Full name</label>
              <input 
                type="text" 
                required 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div className="auth-form-group">
            <label>Email</label>
            <input 
              type="email" 
              required 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="you@example.com"
            />
          </div>
          
          <div className="auth-form-group">
            <label>Password</label>
            <input 
              type="password" 
              required 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
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