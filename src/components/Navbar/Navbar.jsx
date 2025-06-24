import React from 'react'
import Logo from '../../assets/TravelwiseLogo.png'


const Navbar = () => {
  return (
    <>

    <div className='container fixed top-0 right-0 w-full bg-white shadow-md text-black py-3 sm:py-0 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>

      {/* Logo Sectiom */}
      <div >
        <Link to="/">
          <img src={Logo} alt="TravelWise Logo" className="h-10 w-auto" />
        
        </Link>
      </div>

      {/* Navigation Links */}
      <nav>

      </nav>

      {/* Login/Signup Buttons */}
      <div>

      </div>

    </div>
    </>
  )
}

export default Navbar