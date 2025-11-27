import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer(){
  return (
    <footer className="py-16 bg-forest text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          <div>
            <h3 className="font-heading font-bold text-xl mb-4 text-primary">ProLaunch Careers</h3>
            <p className="text-white/70 leading-relaxed">
              Transforming overlooked professionals into in-demand candidates.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/70 hover:text-primary transition">Home</Link></li>
              <li><Link to="/services" className="text-white/70 hover:text-primary transition">Services</Link></li>
              <li><Link to="/about" className="text-white/70 hover:text-primary transition">About</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-primary transition">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Services</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-primary transition">CV Optimization</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">LinkedIn Branding</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Career Coaching</a></li>
              <li><a href="#" className="text-white/70 hover:text-primary transition">Remote Prep</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Contact</h4>
            <p className="text-white/70 text-sm mb-3">
              <strong>Email:</strong><br/>
              support@prolaunchcareers.online
            </p>
            <a 
              href="https://wa.me/1234567890" 
              target="_blank" 
              rel="noreferrer"
              className="inline-block text-primary hover:text-primary-light transition font-semibold"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/70">
          <p>© {new Date().getFullYear()} ProLaunch Careers. All rights reserved.</p>
          <p className="text-sm mt-2">Helping African professionals get seen. 🚀</p>
        </div>
      </div>
    </footer>
  )
}
