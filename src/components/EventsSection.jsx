import React from 'react'
import { Link } from 'react-router-dom'

const pastEvents = [
  {
    id: 1,
    title: 'Visibility Masterclass — March 2025',
    date: 'Mar 18, 2025',
    summary: 'How to optimise CVs and LinkedIn for recruiter search. Includes templates & checklist.'
  },
  {
    id: 2,
    title: 'Remote Hiring Bootcamp — June 2025',
    date: 'Jun 10, 2025',
    summary: 'Positioning for remote roles: skills, communication and portfolio best practices.'
  }
]

const upcomingEvents = [
  {
    id: 101,
    title: 'Interview Toolkit Live — Dec 2025',
    date: 'Dec 10, 2025',
    summary: 'Live mock interviews, answer frameworks and negotiation tips.',
    registerUrl: '#' // replace with real registration link
  },
  {
    id: 102,
    title: 'LinkedIn Growth Sprint — Jan 2026',
    date: 'Jan 21, 2026',
    summary: 'A 2-week sprint to transform your LinkedIn profile and content plan.',
    registerUrl: '#' // replace with real registration link
  }
]

export default function EventsSection() {
  return (
    <section className="section-light py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-forest">Events & Webinars</h2>
            <p className="text-stone-dark mt-2">Past recordings, resources and upcoming live sessions to help you get visible and hired.</p>
          </div>
          <Link to="/events" className="btn-secondary inline-block">
            View all events
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-forest mb-4">Past Webinars</h3>
            <div className="space-y-4">
              {pastEvents.map(e => (
                <div key={e.id} className="p-4 bg-white rounded-lg border border-stone/30 soft-shadow flex justify-between items-start">
                  <div>
                    <div className="text-sm text-stone-dark">{e.date}</div>
                    <h4 className="font-heading font-bold text-primary text-lg">{e.title}</h4>
                    <p className="text-stone-dark mt-1 text-sm">{e.summary}</p>
                  </div>
                  <div className="ml-4">
                    <a
                      href={`mailto:support@prolaunchcareers.online?subject=Request resources for ${encodeURIComponent(e.title)}`}
                      className="btn-white inline-block"
                    >
                      Request resources
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-forest mb-4">Upcoming Events</h3>
            <div className="space-y-4">
              {upcomingEvents.map(e => (
                <div key={e.id} className="p-4 bg-white rounded-lg border border-stone/30 soft-shadow flex justify-between items-start">
                  <div>
                    <div className="text-sm text-stone-dark">{e.date}</div>
                    <h4 className="font-heading font-bold text-forest text-lg">{e.title}</h4>
                    <p className="text-stone-dark mt-1 text-sm">{e.summary}</p>
                  </div>
                  <div className="ml-4">
                    <a
                      href={e.registerUrl}
                      className="btn-primary inline-block"
                      target={e.registerUrl === '#' ? '_self' : '_blank'}
                      rel="noreferrer"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}