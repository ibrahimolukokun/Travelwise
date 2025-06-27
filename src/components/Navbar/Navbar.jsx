import React, { useState } from 'react'
import Logo from '../../assets/TravelwiseLogo.png'
import { Link, NavLink } from 'react-router-dom'
import Button from '../ui/Button'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'

const Navbar = () => {

  const [shadowMenu, setShadowMenu] = useState(false);
  
  const toggleMenu = () => {
    setShadowMenu(!shadowMenu);}

  return (
    <>

    <div className='bg-dark/5'>
      <div className='container mx-auto py-2 w-full text-black flex items-center justify-between'>

        {/* Logo Sectiom */}
        <div >
          <Link to="/" onClick={()=> window.scrollTo(0,0)}>
            <img src={Logo} alt="TravelWise Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-6'>
            <li className='py-4'>
              <NavLink to="/discover" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                Discover
              </NavLink>
            </li>
            <li className='py-4'>
              <NavLink to="/deals" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                Special Deals
              </NavLink>
            </li>
            <li className='py-4'>
              <NavLink to="/community" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                Community
              </NavLink>
            </li>
            <li className='py-4'>
              <NavLink to="/about" activeClassName="active" onClick={() => window.scrollTo(0,0)}>
                About Us
              </NavLink>
            </li>

          </ul>

        </div>

        {/* Login/Signup Buttons */}
        <div className=' items-center gap-4 sm:block md:block hidden'>
          <Link to="/login">
            <Button variant="ghost" size="md">
              Login
            </Button>
          </Link>
          <Link to="/signup">
            <Button variant="primary" size="md">
              Sign Up
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className='md:hidden block'>
          { shadowMenu ? (
              <HiMenuAlt1 
              className='cursor-pointer transition-all' 
              onClick={toggleMenu}
              size={30}/>
          ):(
            <HiMenuAlt3 
              className='cursor-pointer transition-all' 
              size={30}
              onClick = {toggleMenu}/>
          )}

        </div>

      </div>

      <ResponsiveMenu setShadowMenu={setShadowMenu} shadowMenu={shadowMenu} />

    </div>
    </>
  )
}

export default Navbar