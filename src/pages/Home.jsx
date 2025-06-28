import React from 'react'
import HeroImg from '../assets/hero-image.png'
import Hero from '../components/Hero/Hero'
import PopularLocations from '../components/Locations/PopularLocations'
import TestimonialMap from '../components/Testimonial/TestimonialMap'


const Home = () => {
  return (
    <>
      <div>
        {/* Hero Section */}
        <div className='relative w-full h-[60vh]  flex items-center justify-center'>
          <div className='absolute inset-0 '>
              <div className=''>
              {/* Background Image */}
              <img
                src={HeroImg}
                alt="Travel Background"
                className="absolute right-0 w-full h-[60vh] object-cover z-[-1]"
              />
            </div>
            {/* Hero Content */}
            <Hero />
          </div>
        </div>
        
        {/* Popular Locations Section */}
        <PopularLocations />

        {/* Testimonial Map Section */}
        <TestimonialMap />


      </div>
    </>
  )
}

export default Home