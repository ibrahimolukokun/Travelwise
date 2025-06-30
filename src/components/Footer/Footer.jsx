// src/components/Footer.jsx
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import Logo from '../../assets/TravelwiseLogo.png'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white text-dark px-6 md:px-12 pt-16 pb-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 gap-10">
        {/* Logo and description */}
        <div className="md:col-span-2">
        <Link to="/" onClick={()=> window.scrollTo(0,0)}>
            <img src={Logo} alt="TravelWise Logo" className="h-10 w-auto" />
          </Link>
          <p className="text-gray-600 mt-4 text-sm leading-relaxed">
            Travelwise is a user-first platform that makes travel experiences
            smarter, seamless, and more fun.
          </p>
        </div>

        {/* Footer Columns */}
        <div className="max-w-6xl grid grid-cols-2 sm:grid-cols-4 gap-6 py-6">
          {[
            { title: "About", links: ["How it works", "Careers", "Blog"] },
            { title: "Company", links: ["Partnerships", "Press", "Privacy Policy"] },
            { title: "Support", links: ["Help Center", "Cancellation", "Community"] },
            { title: "Contact", links: ["info@travelwise.com", "+44 0000 123456"] },
          ].map((col, index) => (
            <div key={index} className="">
              <h4 className="font-semibold text-dark mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {col.links.map((link, i) => (
            <li key={i} className="hover:text-primary cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
              </div>
      <div className="max-w-6xl mx-auto mt-10 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Travelwise. All rights reserved.
        </div>

        <div className="flex items-center bg-gray-100 rounded-full overflow-hidden px-2 py-1 w-full md:w-auto max-w-md">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full text-dark text-sm bg-gray-100 focus:outline-none"
          />
          <button className="bg-primary text-white p-2 rounded-full hover:bg-primary-dark transition">
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
