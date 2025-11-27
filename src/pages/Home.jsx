import React from 'react'
import Hero from '../components/Hero'
import WhatWeDo from '../components/WhatWeDo'
import WhoWeHelp from '../components/WhoWeHelp'
import Framework from '../components/Framework'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import EventsSection from '../components/EventsSection' // new import

export default function Home(){
  return (
    <div>
      <Hero />
      <WhatWeDo />
      <WhoWeHelp />
      <Framework />
      <Testimonials />
      <EventsSection /> {/* added events preview section */}
      <CTA />
    </div>
  )
}
