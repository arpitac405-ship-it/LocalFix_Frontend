import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Auth from './pages/Auth';
import FileComplaint from './pages/FileComplaint';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Profile from './pages/Profile'; // <-- Naya import

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/file-complaint" element={<FileComplaint />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} /> {/* <-- Naya route */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;