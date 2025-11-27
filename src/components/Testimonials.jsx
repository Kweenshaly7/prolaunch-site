import React from 'react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Product Manager',
    text: 'I went from zero responses to three interviews in a week.',
    avatar: '👩‍💼'
  },
  {
    name: 'Marcus Johnson',
    role: 'Software Engineer',
    text: 'My new CV got me callbacks within 48 hours.',
    avatar: '👨‍💻'
  },
  {
    name: 'Emma Rodriguez',
    role: 'Marketing Strategist',
    text: 'I finally broke into the remote job space — after 2 years of trying.',
    avatar: '👩‍🔬'
  },
  {
    name: 'Aisha Bello',
    role: 'Remote Job Seeker',
    text: 'For the first time, recruiters started reaching out to me.',
    avatar: '👩🏾‍💼'
  },
  {
    name: 'David Kim',
    role: 'Business Analyst',
    text: 'My LinkedIn profile now shows up in searches — I never knew visibility mattered this much.',
    avatar: '👨‍💼'
  },
  {
    name: 'Lara Smith',
    role: 'HR Specialist',
    text: 'I got a 40% salary increase with the career rebrand.',
    avatar: '👩‍💻'
  },
  {
    name: 'Samuel Adeyemi',
    role: 'Operations Lead',
    text: 'After ProLaunch, I finally understood what the job market is actually looking for.',
    avatar: '👨🏾‍💼'
  }
]

export default function Testimonials() {
  return (
    <section className="section-forest py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-primary mb-4">REAL RESULTS</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Proof &amp; Wins
          </h2>
          <p className="text-lg text-white/80">
            Real people. Real results. Real transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, idx) => (
            <div key={idx} className="card-glass-dark p-6 rounded-xl border border-white/10 flex items-start gap-4">
              <span className="text-3xl">{t.avatar}</span>
              <div>
                <p className="text-white/90 leading-relaxed italic mb-2">"{t.text}"</p>
                <div className="text-white/70 text-sm font-semibold">{t.name} <span className="font-normal">— {t.role}</span></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}