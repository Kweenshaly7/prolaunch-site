import React, { useState } from 'react'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add form submission logic here
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-forest mb-4">
            Let's Help You Get Seen.
          </h1>
          <p className="text-lg text-stone-dark max-w-2xl mx-auto">
            Fill the form below and we'll get back to you.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-light py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Form */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-forest mb-8">Get In Touch</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-forest mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us how we can help you..."
                    rows="5"
                    className="w-full px-4 py-3 border border-stone rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">Send Message</button>

                {submitted && (
                  <div className="p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary text-sm">
                    ✓ Thank you! We'll be in touch soon.
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="card-glass p-8 rounded-xl soft-shadow">
                <h3 className="text-2xl font-heading font-bold text-forest mb-6">Other Ways to Reach Us</h3>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-stone-dark font-semibold uppercase tracking-wider mb-2">Email</p>
                    <a href="mailto:support@prolaunchcareers.online" className="text-primary font-semibold hover:text-teal transition">
                      support@prolaunchcareers.online
                    </a>
                  </div>

                  <div>
                    <p className="text-sm text-stone-dark font-semibold uppercase tracking-wider mb-2">WhatsApp</p>
                    <a 
                      href="https://wa.me/1234567890" 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-primary font-semibold hover:text-teal transition inline-flex items-center gap-2"
                    >
                      💬 Message us on WhatsApp
                    </a>
                  </div>

                  <div className="border-t border-stone pt-6">
                    <p className="text-sm text-stone-dark font-semibold uppercase tracking-wider mb-3">Availability</p>
                    <p className="text-stone-dark">Monday - Friday, 9 AM - 5 PM (Africa Time)</p>
                  </div>
                </div>
              </div>

              <div className="bg-primary/10 p-8 rounded-xl border border-primary/20">
                <div className="text-5xl mb-4">📅</div>
                <h4 className="text-xl font-heading font-bold text-forest mb-3">Book a Free Call</h4>
                <p className="text-stone-dark mb-4">
                  Don't wait for a response. Schedule your free 15-minute strategy call directly.
                </p>
                <a 
                  href="#" 
                  className="btn-primary inline-block"
                >
                  Open Calendar
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
