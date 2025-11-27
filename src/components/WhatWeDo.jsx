import React from 'react'

const services = [
  { title: 'CV Optimization', desc: 'Turn your CV from a mere document into a visibility tool.' },
  { title: 'Job Visibility Strategy', desc: 'Make recruiters stop scrolling and actually notice you.' },
  { title: 'Career Rebrand', desc: 'Rewrite your professional story so it commands attention.' },
  { title: 'Remote-Job Preparation', desc: 'Position yourself for global opportunities, not just local ones.' },
  { title: 'LinkedIn Transformation', desc: 'Build a profile that markets you 24/7.' }
]

export default function WhatWeDo() {
  return (
    <section className="section-light py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-6">
            What We Do
          </h2>
          <p className="text-lg text-stone-dark leading-relaxed">
            You've done the hard work. You have the skills. But in today's job market, skill alone doesn't get you hired — visibility does.
          </p>
          <p className="text-lg text-stone-dark leading-relaxed mt-4">
            Here's how we help you become the candidate people want to hire:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="p-6 bg-white rounded-lg border border-stone/30 soft-shadow hover:border-primary/30 transition">
              <h3 className="text-xl font-heading font-bold text-primary mb-3">{service.title}</h3>
              <p className="text-stone-dark leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}