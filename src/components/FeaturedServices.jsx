import React from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 1,
    title: 'CV & LinkedIn Optimization',
    description: 'Tailored documents designed to get past recruiters and land interviews.',
    icon: '📄',
    color: 'from-primary to-primary-light',
    bgColor: 'bg-primary/5',
    accentColor: 'text-primary'
  },
  {
    id: 2,
    title: 'Interview Coaching',
    description: 'Master common questions, negotiate confidently, and close the offer.',
    icon: '🎯',
    color: 'from-teal to-teal-light',
    bgColor: 'bg-teal-light/10',
    accentColor: 'text-teal-dark'
  },
  {
    id: 3,
    title: 'Career Strategy',
    description: 'Personalized guidance to position yourself for your next big role.',
    icon: '🚀',
    color: 'from-forest to-forest-light',
    bgColor: 'bg-forest/5',
    accentColor: 'text-forest'
  }
]

export default function FeaturedServices() {
  return (
    <section className="section-accent py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-teal mb-4">OUR EXPERTISE</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-4">
            Comprehensive Career Solutions
          </h2>
          <p className="text-lg text-stone-dark max-w-2xl mx-auto">
            Everything you need to stand out and secure your next opportunity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className={`${service.bgColor} p-8 rounded-2xl soft-shadow hover:shadow-lg-custom transition-all duration-300 border border-white/50 group hover:-translate-y-2`}>
              <div className={`text-6xl mb-6 group-hover:scale-110 transition-transform duration-300`}>{service.icon}</div>
              <h3 className={`text-2xl font-heading font-bold ${service.accentColor} mb-3`}>{service.title}</h3>
              <p className="text-stone-dark leading-relaxed mb-6">{service.description}</p>
              <Link to="/services" className={`${service.accentColor} font-semibold hover:opacity-70 transition`}>
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}