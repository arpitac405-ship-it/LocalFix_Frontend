import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('civicfix_user');
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const PinIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#5b427f' }}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );

  const categories = [
    { title: "Streetlight", desc: "Report streetlight issues" },
    { title: "Garbage", desc: "Report garbage issues" },
    { title: "Pothole", desc: "Report pothole issues" },
    { title: "Water Leakage", desc: "Report water leakage issues" },
    { title: "Drainage", desc: "Report drainage issues" },
    { title: "Other", desc: "Report other issues" }
  ];

  return (
    <div className="home-page-wrapper">
      
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-group">
            <div className="logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><h2 className="logo-text">LocalFix</h2></Link>
          </div>
          
          <div className="nav-links">
            <Link to="/" style={{ color: '#1a103c', fontWeight: '600' }}>Home</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
          </div>
          
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

      {/* --- UPPER BODY: HERO SECTION --- */}
      <div className="hero-section animate-slide-up">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              Built for local communities
            </div>
            <h1 className="hero-title">
              Your neighborhood.<br/>Heard, tracked, fixed.
            </h1>
            <p className="hero-subtitle">
              Report potholes, water leaks, broken streetlights and more. Follow every<br/> complaint from Pending → In Progress → Resolved .
            </p>

            <div className="hero-buttons">
              <Link to="/file-complaint" style={{ textDecoration: 'none' }}>
                <button className="btn-primary">
                  File a complaint 
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
              </Link>
              <button className="btn-outline">Browse recent reports</button>
            </div>
          </div>

          <div className="stats-container">
            <div className="stat-card animate-slide-up delay-1">
              <div className="stat-header">
                <h4>TOTAL REPORTS</h4>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </div>
              <h2>0</h2>
            </div>
            
            <div className="stat-card animate-slide-up delay-2">
              <div className="stat-header">
                <h4>IN PROGRESS</h4>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect><path d="M9 14l2 2 4-4"></path></svg>
              </div>
              <h2>0</h2>
            </div>
            
            <div className="stat-card animate-slide-up delay-3">
              <div className="stat-header">
                <h4>RESOLVED</h4>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              </div>
              <h2>0</h2>
            </div>
          </div>
        </div>
      </div>

      {/* --- LOWER BODY: CONTENT SECTION --- */}
      <div className="content-section">
        
        <h2 className="section-heading">What can you report?</h2>
        <p className="section-subheading">Pick a category and share the details with your community.</p>

        <div className="grid-container">
          {categories.map((cat, index) => (
            <Link to="/file-complaint" key={index} className="category-link">
              <div className="category-card">
                <div className="icon-box">
                  {PinIcon}
                </div>
                <div>
                  <h3 className="category-title">{cat.title}</h3>
                  <p className="category-desc">{cat.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="recent-complaints-section">
          <h2 className="section-heading">Recent complaints</h2>
          <p className="section-subheading">See what your neighbors are reporting.</p>
          
          <div className="empty-state">
            <p className="empty-state-text">No complaints yet. Be the first to file one.</p>
            <Link to="/file-complaint">
              <button className="btn-dark-purple">
                File a complaint
              </button>
            </Link>
          </div>
        </div>

      </div>

      {/* --- LOWER BODY: FOOTER --- */}
      <footer className="footer">
        © 2026 LocalFix. Built with care for local communities.
      </footer>
      
    </div>
  );
}