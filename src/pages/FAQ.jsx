import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FAQ.css'; // <-- CSS Import

export default function FAQ() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('civicfix_user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const faqs = [
    "Do I need an account to file a complaint?",
    "How do I file a complaint?",
    "What kinds of issues can I report?",
    "How do I track the status of my complaint?",
    "Who updates the status of a complaint?"
  ];

  return (
    <div className="faq-page-wrapper">
      
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-group">
            <div className="logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><h2 className="logo-text">LocalFix</h2></Link>
          </div>
          
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/faq" style={{ color: '#1a103c', fontWeight: '600' }}>FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
          {/* Dynamic Profile/Login Button */}
          {isLoggedIn ? (
            <Link to="/profile" style={{ textDecoration: 'none' }}>
              <button className="btn-nav-signin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: '5px' }}>
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                My Profile
              </button>
            </Link>
          ) : (
            <Link to="/login" style={{ textDecoration: 'none' }}>
              <button className="btn-nav-signin">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
                Sign in
              </button>
            </Link>
          )}
        </div>
      </nav>

      {/* --- FAQ CONTENT --- */}
      <div className="content-section faq-content-wrapper">
        <div className="faq-header-container">
          <h1 className="faq-header-title">
            <span className="faq-header-icon">?</span>
            Frequently asked questions
          </h1>
        </div>

        <div className="faq-list-container">
          {faqs.map((q, i) => (
            <details key={i} className="faq-item">
              <summary className="faq-question">{q}</summary>
              <p className="faq-answer">This is a placeholder answer. In a real application, you would replace this with actual details.</p>
            </details>
          ))}
        </div>
      </div>

      <footer className="footer">
        © 2026 LocalFix. Built with care for local communities.
      </footer>
    </div>
  );
}