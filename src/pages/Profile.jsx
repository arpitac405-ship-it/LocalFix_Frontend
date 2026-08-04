import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'; // <-- CSS File Import ki

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: 'User', email: '' });

  // Page load hote hi local storage se user ka data nikalenge
  useEffect(() => {
    const savedUser = localStorage.getItem('civicfix_user');
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  const [myComplaints] = useState([
    { id: '#1042', title: 'Broken streetlight near Central Park', category: 'Streetlight', date: 'Oct 24, 2026', status: 'In Progress' },
    { id: '#1028', title: 'Severe pothole on Main Street', category: 'Pothole', date: 'Oct 15, 2026', status: 'Resolved' },
  ]);

  // Dynamic colors ke liye function
  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending': return { bg: '#fef3c7', text: '#92400e' };
      case 'In Progress': return { bg: '#e0e7ff', text: '#3730a3' };
      case 'Resolved': return { bg: '#dcfce3', text: '#166534' };
      default: return { bg: '#f3f4f6', text: '#374151' };
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('civicfix_user');
    navigate('/');
  };

  return (
    <div className="profile-page-wrapper">
      
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
            <Link to="/contact">Contact</Link>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <button onClick={handleLogout} className="btn-logout">Logout</button>
          </div>
        </div>
      </nav>

      {/* --- MAIN PROFILE CONTENT --- */}
      <div className="content-section profile-content-wrapper">
        
        {/* Dynamic User Info Header */}
        <div className="profile-header">
          <div className="profile-info-flex">
            <div className="profile-avatar">
              {/* Naam ka pehla letter dikhayega */}
              {userData.name.charAt(0).toUpperCase()}
            </div>
            <div>
              <h1 className="profile-name">{userData.name}</h1>
              <p className="profile-email">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                {userData.email}
              </p>
            </div>
          </div>
          <Link to="/file-complaint">
            <button className="btn-dark-purple">File a New Complaint</button>
          </Link>
        </div>

        {/* Complaints Section */}
        <div className="complaints-section">
          <div className="complaints-header">
            <h2 className="complaints-title">My Complaints</h2>
            <span className="complaints-badge">
              {myComplaints.length} Total
            </span>
          </div>

          <div className="complaints-list">
            {myComplaints.map((complaint, index) => (
              <div key={index} className="complaint-list-card">
                <div className="complaint-card-inner">
                  <div>
                    <h3 className="complaint-item-title">{complaint.title}</h3>
                    <p className="complaint-item-meta">Category: {complaint.category} • Date: {complaint.date}</p>
                  </div>
                  <div 
                    className="complaint-status-badge" 
                    style={{ 
                      backgroundColor: getStatusStyle(complaint.status).bg, 
                      color: getStatusStyle(complaint.status).text 
                    }}
                  >
                    {complaint.status}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
    </div>
  );
}