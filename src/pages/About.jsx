import React from 'react'
import Founder from '../assets/founder.png'

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-forest mb-6">About ProLaunch Careers</h1>
        </div>
      </section>

      {/* About the Community */}
      <section className="section-light py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-forest mb-8">About the Community</h2>
          <div className="space-y-6 text-stone-dark text-lg leading-relaxed">
            <p>
              ProLaunch Careers was born from one painful reality: qualified people weren't getting hired — not because they lacked skills, but because they lacked visibility.
            </p>
            <p>
              We saw brilliant professionals sending hundreds of applications…
            </p>
            <ul className="space-y-3 ml-6">
              <li>• Getting no replies…</li>
              <li>• Blaming themselves…</li>
              <li>• Thinking they're not good enough…</li>
            </ul>
            <p>
              But the truth? The job market changed — and nobody told them how to keep up.
            </p>
            <p className="text-xl font-heading font-bold text-forest bg-primary/10 p-6 rounded-lg border border-primary/20">
              So we built a solution that bridges the gap between talent and opportunity. A solution that helps people get seen, not ignored.
            </p>
          </div>
        </div>
      </section>

      {/* About the Founder */}
      <section className="section-accent py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-forest mb-16 text-center">About the Founder</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <img
                src={Founder}
                alt="Founder"
                className="w-full max-w-sm h-auto rounded-2xl soft-shadow object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <p className="text-lg text-stone-dark leading-relaxed mb-6">
                Behind ProLaunch Careers is a multi-skilled professional with expertise across:
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  'Virtual Assistance',
                  'Operations & Training',
                  'Customer Success',
                  'Remote Career Development',
                  'IT Support & Digital Systems',
                  'Career Coaching & Strategy',
                  'Social Media & Brand Positioning'
                ].map((skill, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-stone-dark">
                    <span className="text-primary">✓</span>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone-dark leading-relaxed mb-6">
                A career built on helping people grow — and a track record of transforming professionals from "I don't know what I'm doing wrong" to "I finally got the job."
              </p>
              <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
                <p className="text-lg font-heading font-bold text-forest mb-2">
                  <span className="text-primary">The founder's strength:</span> Clarity.
                </p>
                <p className="text-stone-dark">
                  The ability to tell you precisely why you're not getting results — and how to fix it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="section-forest py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-heading font-bold text-white mb-12 text-center">What Makes Us Different</h2>
          <div className="space-y-6">
            {[
              'We don\'t do generic templates. Everything is tailored to your field, your goals, your brand.',
              'We understand the African job market AND the global one.',
              'We give you visibility, not vibes.',
              'We fix the real problem — positioning.'
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-4 text-white text-lg">
                <span className="text-primary text-2xl flex-shrink-0">→</span>
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
