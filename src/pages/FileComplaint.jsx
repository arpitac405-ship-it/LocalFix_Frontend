import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FileComplaint.css'; // <-- CSS import

export default function FileComplaint() {
  const navigate = useNavigate();
  const [category, setCategory] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file)); 
    }
  };

  const handleComplaintSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('category', category);
    formData.append('title', title);
    formData.append('description', description);
    
    if (imageFile) {
      formData.append('image', imageFile); 
    }

    console.log("Complaint Submitted (Frontend Only):", { category, title, description, imageFile });
    alert("Complaint filed successfully! (Frontend check)");
    navigate('/profile');
  };

  return (
    <div style={{ backgroundColor: '#fdfdff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      
      {/* Navbar (Uses shared classes from index.css) */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-group">
            <div className="logo-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><h2 className="logo-text">CivicFix</h2></Link>
          </div>
          <Link to="/" style={{ textDecoration: 'none', color: '#6b7280', fontWeight: '500', fontSize: '14px' }}>← Back to Home</Link>
        </div>
      </nav>

      {/* Main Content */}
      <div className="complaint-page-container">
        <div className="complaint-card">
          <h1 className="complaint-title">File a Complaint</h1>
          <p className="complaint-subtitle">Provide details and a photo so we can understand the issue.</p>

          <form onSubmit={handleComplaintSubmit} className="complaint-form">
            
            <div className="form-field">
              <label>Category</label>
              <select required value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="">Select an issue...</option>
                <option value="Streetlight">Streetlight</option>
                <option value="Garbage">Garbage</option>
                <option value="Pothole">Pothole</option>
                <option value="Water Leakage">Water Leakage</option>
                <option value="Drainage">Drainage</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-field">
              <label>Complaint Title</label>
              <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="E.g. Large pothole on Main St." />
            </div>

            <div className="form-field">
              <label>Description</label>
              <textarea required rows="4" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe the issue in detail..."></textarea>
            </div>

            <div className="form-field">
              <label>Upload Photo (Optional)</label>
              <div className="photo-upload-area">
                
                {imagePreview ? (
                  <div className="preview-container">
                    <img src={imagePreview} alt="Preview" className="preview-image" />
                    <button type="button" onClick={() => { setImageFile(null); setImagePreview(null); }} className="btn-remove-photo">✕</button>
                  </div>
                ) : (
                  <>
                    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6b4c9a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px' }}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
                    <p style={{ color: '#6b7280', fontSize: '14px', margin: '0 0 10px 0' }}>Click to upload a photo</p>
                  </>
                )}
                
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleImageChange}
                  style={{ opacity: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', cursor: 'pointer' }}
                  title="Upload a photo"
                />
              </div>
            </div>

            <button type="submit" className="btn-submit-complaint">
              Submit Report
            </button>
          </form>

        </div>
      </div>
      
    </div>
  );
}