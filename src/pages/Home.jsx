import React from 'react'
import HeroImg from '../assets/hero-image.png'
import Hero from '../components/Hero/Hero'
import PopularLocations from '../components/Locations/PopularLocations'
import TestimonialMap from '../components/Testimonial/TestimonialMap'
import CallToAction from '../components/CallToAction/CallToAction'


const Home = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className='relative w-full min-h-screen sm:min-h-[70vh] lg:min-h-[70vh] flex items-center justify-center overflow-hidden'>
          <div className='absolute inset-0 sm:px-2'>
            {/* Background Image */}
            <img
              src={HeroImg}
              alt="Travel Background"
              className="absolute inset-0 w-full h-full object-cover z-[-1]"
            />
            {/* Hero Content */}
            <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
              <Hero />
            </div>
          </div>
        </div>

        {/* Popular Locations Section */}
        <PopularLocations />

        {/* Testimonial Map Section */}
        <TestimonialMap />

        {/* Call to Action Section */}
        <CallToAction />


      </div>
    </>
  )
}

export default Home