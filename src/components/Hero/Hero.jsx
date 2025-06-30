import React from 'react'
import Button from '../ui/Button'
import { FaSearch } from 'react-icons/fa'
import CustomSelect from './CustomSelect'
import CustomDate from './CustomDate'


const Hero = () => {
  return (
    <div>
          <div className='container mx-auto py-16 grid grid-cols-1 gap-4'>

            {/* Text Section */}
            <div className='flex flex-col items-start mb-8 '>
              <h1 className='text-4xl md:text-5xl font-bold mb-4 text-dark'>
              <span className="block"> Live Your </span>
              <span className="block" > Adeventure </span>
              </h1>
              <p className='text-lg md:text-xl text-gray-700 mb-8'>
              <span className="block"> Discover amazing places in the </span>
              <span className="block" > world to have some fun </span>
              </p>
            </div>
            
            {/*Search Section */}
            <div className='space-y-4 bg-[#E5E5E5] rounded-lg py-4 px-6 shadow-md relative'>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>

                    {/* Location Input */}
                    <div className='relative md:border-r md:border-gray-300'>
                      
                      <CustomSelect
                        label="Where would you like to go ?"
                        placeholder="Location"
                        options={['Paris', 'Tokyo', 'London', 'Dubai', 'New York', 'Istanbul']}
                      />

                    </div>

                    {/* Start Date */}
                    <div className='relative md:border-r md:border-gray-300'>

                      <CustomDate
                        label="Start Date"
                        placeholder="When will it start?"
                      />

                    </div>

                    {/* End Date */}
                    <div className='relative md:border-r md:border-gray-300'>

                      <CustomDate
                        label="End Date"
                        placeholder="When will it end?"
                      />

                    </div>
                    <div className='relative'>
                        
                    <CustomSelect
                        label="How many people?"
                        placeholder="People"
                        options={['1 Person', '2 People', '3 People', '4+ People']}
                        />

                    </div>

                    {/* Search Button */}           
                    <Button
                        type="submit"
                        variant='primary'
                        size='lg'
                        to=""
                    >
                    <FaSearch className='mr-4' size={16} />
                        Search
                    </Button>
                    
                </div>
              
            </div>

          </div>

        </div>
  )
}

export default Hero