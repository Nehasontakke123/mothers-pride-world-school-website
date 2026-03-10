import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ContactUs from './components/ContactUs';

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<h1>About</h1>} />
        <Route path="/admission" element={<h1>Admission</h1>} />
        <Route path="/academics" element={<h1>Academics</h1>} />
        <Route path="/facilities" element={<h1>Facilities</h1>} />
        <Route path="/co-curricular" element={<h1>Activities</h1>} />
        <Route path="/gallery" element={<h1>Gallery</h1>} />

        {/* Contact Page */}
        <Route path="/contact" element={<ContactUs />} />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;