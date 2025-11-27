import React from 'react'

const steps = [
  {
    num: '1',
    title: 'Audit',
    desc: 'We diagnose why your CV, LinkedIn and applications aren\'t working.'
  },
  {
    num: '2',
    title: 'Rebrand',
    desc: 'We rebuild your professional identity for clarity, authority, and relevance.'
  },
  {
    num: '3',
    title: 'Position',
    desc: 'We craft your job-market strategy so recruiters actually see you.'
  },
  {
    num: '4',
    title: 'Launch',
    desc: 'You get a visibility-ready brand that attracts interviews and opportunities.'
  }
];

export default function Framework() {
  return (
    <section className="section-primary py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="badge-primary mb-4">OUR PROVEN SYSTEM</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-4">
            The Visibility Advantage™
          </h2>
          <p className="text-lg text-stone-dark max-w-2xl mx-auto">
            A simple 4-step system that has helped clients move from "ignored" to "in-demand":
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="card-glass p-6 rounded-xl text-center h-full">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-2xl">
                  {step.num}
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">{step.title}</h3>
                <p className="text-stone-dark text-sm leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/4 -right-3 text-primary text-2xl">→</div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg font-heading font-bold text-forest">Simple. Sharp. Effective.</p>
        </div>
      </div>
    </section>
  )
}