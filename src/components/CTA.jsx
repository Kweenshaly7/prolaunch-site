import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA() {
  return (
    <section className="bg-gradient-primary py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Ready to Transform Your Career?
        </h2>
        <p className="text-xl text-white/95 mb-8 max-w-2xl mx-auto">
          Join hundreds of professionals who've landed their dream roles with our guidance. Your next opportunity is waiting.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/contact" className="btn-white inline-block">
            Start Your Journey Today
          </Link>
          <a href="https://wa.me/2349017983507" target="_blank" rel="noreferrer" className="btn-white inline-block">
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}