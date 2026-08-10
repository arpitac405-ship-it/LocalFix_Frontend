import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Profile.css'; 

export default function Profile() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({ name: 'User', email: 'No email' });
  const [myComplaints, setMyComplaints] = useState([]);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('civicfix_user');
      if (!savedUser) {
        navigate('/login');
      } else {
        const parsedUser = JSON.parse(savedUser);
        if (parsedUser && typeof parsedUser === 'object') {
          setUserData(parsedUser);
        }
      }
    } catch (e) {
      console.error("Local storage parse error", e);
      navigate('/login');
    }
  }, [navigate]);

  async function getComplaints() {
    try {
      const token = localStorage.getItem('token');
      
      const response = await fetch("https://localfix-backend-tbuf.onrender.com", {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`, 
          'token': token 
        }
      });

      if (!response.ok) {
        setMyComplaints([]); 
        return;
      }
      const data = await response.json();
      
      if (Array.isArray(data)) {
        setMyComplaints(data);
      } else {
        setMyComplaints([]);
      }
    } catch (error) {
      setMyComplaints([]); 
    }
  }

  useEffect(() => {
    getComplaints();
  }, []);

  function handleLogout() {
    localStorage.removeItem('civicfix_user');
    localStorage.removeItem('token'); 
    navigate('/');
  }

  const getStatusStyle = (status) => {
    switch(status) {
      case 'PENDING': return { bg: '#fef3c7', text: '#d97706' }; 
      case 'IN_PROGRESS': return { bg: '#dbeafe', text: '#2563eb' }; 
      case 'RESOLVED': return { bg: '#dcfce3', text: '#16a34a' }; 
      default: return { bg: '#f3f4f6', text: '#4b5563' }; 
    }
  };

  const formatCategory = (categoryText) => {
    if (!categoryText) return 'General';
    return categoryText.replace('_', ' ').toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
  };

  return (
    <div className="profile-page-wrapper">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-group">
            <div className="logo-icon">📍</div>
            <Link to="/" style={{ textDecoration: 'none' }}><h2 className="logo-text">LocalFix</h2></Link>
          </div>
          <button onClick={handleLogout} className="btn-logout">Logout</button>
        </div>
      </nav>

      <div className="content-section profile-content-wrapper">
        <div className="profile-header profile-glass-card">
          <div className="profile-avatar">
             {userData?.name?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div className="profile-info">
            <h1>{userData?.name || 'User'}</h1>
            <p>{userData?.email || 'No email provided'}</p>
          </div>
        </div>

        <div className="complaints-section">
          <h2 className="section-title">My Complaints</h2>
          
          <div className="complaints-grid">
            {Array.isArray(myComplaints) && myComplaints.length === 0 ? (
              
              /* 🌟 NAYA EMPTY STATE DESIGN 🌟 */
              <div className="empty-state">
                <div className="empty-state-icon">📝</div>
                <h3>No complaints yet</h3>
                <p>Looks like you haven't reported any issues in your area.</p>
                <button 
                  onClick={() => navigate('/file-complaint')} 
                  className="btn-file-first-complaint"
                >
                  File your first complaint
                </button>
              </div>

            ) : (
              Array.isArray(myComplaints) && myComplaints.map((complaint, index) => {
                const statusStyle = getStatusStyle(complaint?.status);
                
                return (
                  <div key={index} className="complaint-card-modern">
                    <div className="complaint-card-header">
                      <span className="category-tag">
                        {formatCategory(complaint?.category)}
                      </span>
                      <span 
                        className="status-badge"
                        style={{ backgroundColor: statusStyle.bg, color: statusStyle.text }}
                      >
                        {complaint?.status || 'PENDING'}
                      </span>
                    </div>
                    
                    <h3 className="complaint-title-text">{complaint?.title || 'No Title'}</h3>
                    
                    {complaint?.description && (
                      <p className="complaint-desc-text">
                        {complaint.description.length > 60 
                          ? complaint.description.substring(0, 60) + '...' 
                          : complaint.description}
                      </p>
                    )}
                    
                    <div className="complaint-footer">
                      <span className="complaint-date">
                        📅 {new Date(complaint.createdAt).toLocaleDateString('en-GB')}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}