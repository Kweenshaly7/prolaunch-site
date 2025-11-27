import React from 'react'

const audiences = [
  'Early-career professionals',
  'Career switchers',
  'Job seekers with endless "no response" experiences',
  'Remote job aspirants',
  'Underpaid or underutilized employees who know they are capable of more',
  'Professionals re-entering the job market after a career gap'
]

export default function WhoWeHelp() {
  return (
    <section className="section-accent py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-forest mb-6 text-center">
            Who We Help
          </h2>
          <p className="text-lg text-stone-dark leading-relaxed text-center mb-12">
            We support people who are tired of feeling stuck, unseen, and undervalued:
          </p>

          <div className="space-y-4 mb-12">
            {audiences.map((audience, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-white/60 rounded-lg">
                <span className="text-primary text-2xl mt-1">✓</span>
                <p className="text-stone-dark text-lg">{audience}</p>
              </div>
            ))}
          </div>

          <div className="bg-white p-8 rounded-xl soft-shadow border border-primary/20">
            <p className="text-lg text-forest font-heading font-bold text-center">
              If you've tried everything and still feel like you're shouting into the void — you're exactly who we built this for.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}