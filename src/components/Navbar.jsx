import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png' // ...existing import if present

export default function Navbar(){
  const [open, setOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-stone/20 soft-shadow">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={Logo} alt="ProLaunch Careers logo" className="h-9 w-auto" />
          <span className="text-2xl font-heading font-bold text-primary">ProLaunch Careers</span>
        </Link>

        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-forest hover:text-primary transition font-semibold">Home</Link>
          <Link to="/services" className="text-forest hover:text-primary transition font-semibold">Services</Link>
          <Link to="/events" className="text-forest hover:text-primary transition font-semibold">Events</Link> {/* new link */}
          <Link to="/about" className="text-forest hover:text-primary transition font-semibold">About</Link>
          <Link to="/contact" className="btn-primary">Join Now</Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#124745" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4 border-t border-stone/20">
          <Link to="/" className="block py-2 text-forest font-semibold" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/services" className="block py-2 text-forest font-semibold" onClick={() => setOpen(false)}>Services</Link>
          <Link to="/events" className="block py-2 text-forest font-semibold" onClick={() => setOpen(false)}>Events</Link> {/* new link */}
          <Link to="/about" className="block py-2 text-forest font-semibold" onClick={() => setOpen(false)}>About</Link>
          <Link to="/contact" className="btn-primary w-full" onClick={() => setOpen(false)}>Book Now</Link>
        </div>
      )}
    </nav>
  )
}
