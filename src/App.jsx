import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import Profile from './pages/Profile';
import FileComplaint from './pages/FileComplaint';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* URL ke hisaab se pages yahan define hote hain */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/file-complaint" element={<FileComplaint />} />
      </Routes>
    </BrowserRouter>
  );
}