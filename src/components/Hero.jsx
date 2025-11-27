import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-gradient py-20 md:py-40 relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left: Content */}
        <div className="space-y-8">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-forest leading-tight">
              You're Not "Unqualified."<br/>
              <span className="text-primary">You're Just Invisible.</span>
            </h1>
          </div>
          
          <p className="text-lg text-stone-dark max-w-lg leading-relaxed">
            If you're tired of sending 100+ applications with zero replies, you don't need more effort — you need strategy, positioning, and a career brand that actually gets seen. ProLaunch Careers helps you go from overlooked to in-demand.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/contact" className="btn-primary inline-block text-center">
              Book a Free Coaching Call
            </Link>
            <Link to="/services" className="btn-secondary inline-block text-center">
              Start Your CV Makeover
            </Link>
          </div>

          <div className="pt-8 border-t border-stone">
            <p className="text-sm text-stone-dark font-semibold">✓ Trusted by 500+ professionals globally</p>
          </div>
        </div>

        {/* Right: Founder Photo */}
        <div className="flex justify-center items-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-teal rounded-3xl blur-3xl opacity-25 animate-pulse-glow"></div>
          <div className="relative animate-float">
            <img 
              src="/founder.jpg" 
              alt="Founder - Career Coach at ProLaunch"
              loading="lazy"
              className="w-full max-w-md h-auto rounded-3xl soft-shadow object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}