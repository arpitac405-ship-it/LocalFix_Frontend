import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css'; 

export default function Contact() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('civicfix_user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div className="contact-page-wrapper">
      
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
            <Link to="/faq">FAQ</Link>
            <Link to="/contact" style={{ color: '#1a103c', fontWeight: '600' }}>Contact</Link>
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

      {/* --- CONTACT CONTENT --- */}
      <div className="contact-container">
        
        <div className="contact-info-section">
          <h1 style={{ color: '#1a103c', fontSize: '32px', marginBottom: '15px', fontWeight: '700' }}>Get in touch</h1>
          <p style={{ color: '#6b7280', fontSize: '15px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '400px' }}>
            Questions about how to file a complaint, track its status, or something else? Send us a message.
          </p>
          
          <div className="info-list">
            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </div>
              <div>
                <h4 style={{ color: '#1a103c', margin: 0, fontSize: '15px', fontWeight: '600' }}>Email</h4>
                <p style={{ color: '#6b7280', margin: '4px 0 0 0', fontSize: '14px' }}>hello@civicfix.local</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
              </div>
              <div>
                <h4 style={{ color: '#1a103c', margin: 0, fontSize: '15px', fontWeight: '600' }}>Response time</h4>
                <p style={{ color: '#6b7280', margin: '4px 0 0 0', fontSize: '14px' }}>Within 2 business days</p>
              </div>
            </div>

            <div className="info-item">
              <div className="info-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <div>
                <h4 style={{ color: '#1a103c', margin: 0, fontSize: '15px', fontWeight: '600' }}>Community</h4>
                <p style={{ color: '#6b7280', margin: '4px 0 0 0', fontSize: '14px' }}>Serving local neighborhoods</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-card animate-slide-up delay-2">
          <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input type="text" placeholder="Your full name" />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@example.com" />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What's this about?" />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea rows="6" placeholder="How can we help?"></textarea>
              <div className="char-count">0/1000</div>
            </div>
            <button type="submit" className="btn-submit">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
              Send message
            </button>
          </form>
        </div>

      </div>

      <footer className="footer">
        © 2026 LocalFix. Built with care for local communities.
      </footer>
      
    </div>
  );
}