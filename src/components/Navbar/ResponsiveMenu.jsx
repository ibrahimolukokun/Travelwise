import React from 'react'
import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const navbarLinks = [
  { link: '/discover', name: 'Discover' },
  { link: '/deals', name: 'Special Deals' },
  { link: '/community', name: 'Community' },
  { link: '/about', name: 'About Us' },
]

const ResponsiveMenu = ({setShadowMenu, shadowMenu}) => {
  return (
    <>
    <div
    className={`${
      shadowMenu ? 'left-0' : '-left-[100%]'
      } fixed bottom-0 top-0 z-20 flex h-screen w-[75%] bg-white dark:text-white px-8 pb-6 pt-16 text-black transition-all duration-200 md:hidden rounded-r-xl shadow-md `}>

      <div className="Navbar_Card">

        {/* Top Section */}
        <div className='flex items-center gap-4 mb-8'>

          <FaUserCircle size={50} className='text-primary' />

          <div>
            <h2 className='text-lg font-semibold text-dark'>Hello User</h2>
            <p className='text-sm text-gray-500'>
              Premium Member
            </p>
          </div>

        </div>

        {/* Navigation Links */}
        <ul className='flex flex-col gap-4 mb-8'>
          {navbarLinks.map(({name, link}) => (
            <li key={link} className='py-2'>
              <Link
                to={link}
                className='text-lg font-medium text-dark hover:text-primary transition-colors'
                onClick={() => {
                  setShadowMenu(false)
                  window.scrollTo(0, 0)
                }}
              >
                {name}
              </Link>
            </li>

          ))
          }
        </ul>

      </div>

    </div>
    </>
  )
}

export default ResponsiveMenu