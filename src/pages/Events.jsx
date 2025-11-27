import React from 'react'

const pastEvents = [
  {
    id: 1,
    title: 'Visibility Masterclass — March 2025',
    date: 'Mar 18, 2025',
    summary: 'How to optimise CVs and LinkedIn for recruiter search. Includes templates & checklist.',
    resourcesLink: '#' // replace with private resource link if available
  },
  {
    id: 2,
    title: 'Remote Hiring Bootcamp — June 2025',
    date: 'Jun 10, 2025',
    summary: 'Positioning for remote roles: skills, communication and portfolio best practices.',
    resourcesLink: '#'
  }
]

const upcomingEvents = [
  {
    id: 101,
    title: 'Interview Toolkit Live — Dec 2025',
    date: 'Dec 10, 2025',
    summary: 'Live mock interviews, answer frameworks and negotiation tips.',
    registerUrl: '#' // replace with registration link
  },
  {
    id: 102,
    title: 'LinkedIn Growth Sprint — Jan 2026',
    date: 'Jan 21, 2026',
    summary: 'A 2-week sprint to transform your LinkedIn profile and content plan.',
    registerUrl: '#' // replace with registration link
  }
]

export default function EventsPage() {
  return (
    <div>
      <section className="hero-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-forest">Events & Webinars</h1>
          <p className="text-stone-dark mt-3">Browse past recordings and register for upcoming sessions.</p>
        </div>
      </section>

      <section className="section-light py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-forest mb-6">Past Webinars</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {pastEvents.map(e => (
              <div key={e.id} className="p-6 bg-white rounded-lg border border-stone/30 soft-shadow">
                <div className="text-sm text-stone-dark">{e.date}</div>
                <h3 className="text-xl font-heading font-bold text-primary my-2">{e.title}</h3>
                <p className="text-stone-dark mb-4">{e.summary}</p>
                <div className="flex gap-3">
                  <a
                    href={e.resourcesLink === '#' ? `mailto:support@prolaunchcareers.online?subject=Request resources for ${encodeURIComponent(e.title)}` : e.resourcesLink}
                    className="btn-white"
                    target={e.resourcesLink === '#' ? '_self' : '_blank'}
                    rel="noreferrer"
                  >
                    Request resources
                  </a>
                  <a
                    href="#"
                    className="text-sm text-stone-dark underline"
                  >
                    View recording (if available)
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-accent py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-heading font-bold text-forest mb-6">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map(e => (
              <div key={e.id} className="p-6 bg-white rounded-lg border border-stone/30 soft-shadow">
                <div className="text-sm text-stone-dark">{e.date}</div>
                <h3 className="text-xl font-heading font-bold text-forest my-2">{e.title}</h3>
                <p className="text-stone-dark mb-4">{e.summary}</p>
                <div className="flex gap-3">
                  <a
                    href={e.registerUrl}
                    className="btn-primary"
                    target={e.registerUrl === '#' ? '_self' : '_blank'}
                    rel="noreferrer"
                  >
                    Register
                  </a>
                  <a href="/contact" className="btn-secondary">Request more info</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}