import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Services from './Services'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {

  return (
    <div>
      <Navbar />
      <div style={{ padding: "20px", minHeight: "80vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
