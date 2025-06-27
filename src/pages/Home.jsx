import React from 'react'
import HeroImg from '../assets/hero-image.png'
import Hero from '../components/Hero/Hero' 

const Home = () => {
  return (
    <>
      <div>
        {/* Image Section */}
        <div className=''>
          <img
            src={HeroImg}
            alt="Travel Background"
            className="absolute right-0 w-full h-[60vh] object-cover z-[-1]"
          />
        </div>

        {/* Hero Content */}
        <Hero />

      </div>
    </>
  )
}

export default Home