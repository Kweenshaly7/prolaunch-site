import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Contact from './pages/Contact'
import EventsPage from './pages/Events' // added import

export default function App(){
  return (
    <div className="font-body text-gray-800 antialiased bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<EventsPage />} /> {/* new route */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
