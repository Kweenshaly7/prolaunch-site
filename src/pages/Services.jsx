import React from 'react'
import { Link } from 'react-router-dom'

const servicesList = [
  {
    id: 1,
    title: 'CV Optimization',
    problem: 'You\'re applying everywhere… and nobody is responding. Your CV isn\'t selling your value — it\'s simply listing your experience.',
    fixes: 'Clarity, structure, positioning, recruiter visibility, ATS alignment.',
    benefits: [
      'A fully rewritten, professionally structured CV',
      'Keyword-optimized content for your target roles',
      'Strategic achievements and metrics',
      'A CV that communicates authority within 6 seconds'
    ],
    transformation: 'From overlooked → interview-ready.',
    cta: 'Start Your CV Makeover',
    icon: '📄'
  },
  {
    id: 2,
    title: 'LinkedIn Branding',
    problem: 'Your profile looks "okay"… but it doesn\'t attract anything.',
    fixes: 'Brand clarity, search visibility, recruiter appeal, content strategy.',
    benefits: [
      'Complete LinkedIn overhaul',
      'Optimized headline + About section',
      'Profile positioning that promotes you 24/7',
      'Keyword optimization for recruiter search'
    ],
    transformation: 'From silent profile → recruiter magnets.',
    cta: 'Transform My LinkedIn',
    icon: '🔗'
  },
  {
    id: 3,
    title: '1:1 Career Coaching & Strategy',
    problem: 'You\'re stuck. Confused. Not sure what\'s wrong or what to do next.',
    fixes: 'Direction, clarity, job-market strategy, confidence.',
    benefits: [
      '1:1 coaching calls',
      'Personalized job search roadmap',
      'Positioning strategy',
      'Accountability + private support'
    ],
    transformation: 'From overwhelmed → clear, confident and job-ready.',
    cta: 'Book a Coaching Session',
    icon: '🎯'
  },
  {
    id: 4,
    title: 'Remote Job Preparation',
    problem: 'You want remote opportunities — but your skills, brand, and strategy don\'t align with global hiring standards.',
    fixes: 'Remote readiness, positioning, tool training, communication style.',
    benefits: [
      'Remote CV + profile alignment',
      'Portfolio building guidance',
      'Interview + skills prep',
      'Global job-market positioning'
    ],
    transformation: 'From local candidate → global-ready professional.',
    cta: 'Prepare Me for Remote Roles',
    icon: '🌍'
  },
  {
    id: 5,
    title: 'Job Search Accelerator',
    problem: 'You\'re tired of "hoping" and want a structured, guided, high-performance job search process.',
    fixes: 'Your application strategy, targeting, communication, and follow-ups.',
    benefits: [
      'Done-with-you job search system',
      'Daily structure + accountability',
      'Templates, scripts, tracking tools',
      'Weekly check-ins'
    ],
    transformation: 'From random applications → intentional results.',
    cta: 'Join the Accelerator',
    icon: '🚀'
  }
]

export default function Services(){
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-forest mb-6">Our Services</h1>
          <p className="text-lg text-stone-dark max-w-2xl">
            Everything you need to transform your visibility and land the opportunities you deserve.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          {servicesList.map((service) => (
            <div key={service.id} className="mb-16 pb-16 border-b border-stone last:border-b-0 last:pb-0">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div>
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h2 className="text-4xl font-heading font-bold text-primary mb-6">{service.title}</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="font-semibold text-forest mb-2">The Problem:</h3>
                      <p className="text-stone-dark leading-relaxed">{service.problem}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-forest mb-2">We Fix:</h3>
                      <p className="text-stone-dark">{service.fixes}</p>
                    </div>

                    <div>
                      <h3 className="font-semibold text-forest mb-3">What You Get:</h3>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-stone-dark">
                            <span className="text-primary mt-1">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20">
                      <p className="font-semibold text-forest">
                        <span className="text-primary">Transformation: </span>
                        {service.transformation}
                      </p>
                    </div>

                    <Link to="/contact" className="btn-primary inline-block">
                      {service.cta}
                    </Link>
                  </div>
                </div>

                <div className="hidden md:block">
                  <div className="h-80 bg-gradient-to-br from-primary/20 to-teal/10 rounded-2xl flex items-center justify-center text-6xl">
                    {service.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-accent py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-heading font-bold text-forest mb-6">Training</h2>
              <p className="text-stone-dark mb-6 leading-relaxed">
                Corporate or individual career development training tailored to help teams grow, communicate, and operate professionally.
              </p>
              <Link to="/contact" className="btn-primary">Request Pricing</Link>
            </div>

            <div>
              <h2 className="text-3xl font-heading font-bold text-forest mb-6">E-Book Series</h2>
              <p className="text-stone-dark mb-6 leading-relaxed">
                Resources designed to give you mastery over the job market.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span className="text-stone-dark">CV Optimization Guide</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span className="text-stone-dark">LinkedIn Branding Blueprint</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span className="text-stone-dark">Interview Confidence Playbook</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">→</span>
                  <span className="text-stone-dark">Remote Work Starter Kit</span>
                </li>
              </ul>
              <Link to="/contact" className="btn-primary">Get the E-Books</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
