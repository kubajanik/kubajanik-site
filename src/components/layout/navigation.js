import React from 'react'
import {Link} from 'gatsby'
import {
  FaHome,
  FaLaptopCode,
  FaBlog,
  FaUser,
  FaEnvelopeOpenText
} from 'react-icons/fa'

export default function Navigation() {
  return (
    <nav className="flex flex-col self-start lg:self-center">
      <Link 
        className="text-green-100 flex items-center p-2 font-bold hover:text-green-700 transition-colors duration-500" 
        to="/"
      >
        <FaHome className="mr-2" /> 
        Strona główna
      </Link>
      <Link 
        className="text-green-100 flex items-center p-2 font-bold hover:text-green-700 transition-colors duration-500" 
        to="/portfolio"
      >
        <FaLaptopCode className="mr-2" /> 
        Portfolio
      </Link>
      <Link 
        className="text-green-100 flex items-center p-2 font-bold hover:text-green-700 transition-colors duration-500" 
        to="/blog"
      >
        <FaBlog className="mr-2" />
        Blog
      </Link>
      <Link 
        className="text-green-100 flex items-center p-2 font-bold hover:text-green-700 transition-colors duration-500" 
        to="/about"
      >
        <FaUser className="mr-2" />
        O mnie
      </Link>
      <Link 
        className="text-green-100 flex items-center p-2 font-bold hover:text-green-700 transition-colors duration-500" 
        to="/contact"
      >
        <FaEnvelopeOpenText className="mr-2" />
        Kontakt
      </Link>
    </nav>
  )
}
