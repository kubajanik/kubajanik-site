import React from 'react'
import {Link} from 'gatsby'
import {
  FaHome,
  FaLaptopCode,
  FaBlog,
  FaUser,
  FaEnvelopeOpenText
} from 'react-icons/fa'

const NavLink = props => (
  <Link
    {...props}
    getProps={({isCurrent}) => ({
      className: `${props.className} ${isCurrent && 'text-green-800 hover:text-green-800 dark:text-green-500 dark:text-opacity-100 dark:hover:text-green-500'}`
    })}
  />
)

export default function Navigation() {
  return (
    <nav className="flex flex-col self-start lg:self-center">
      <NavLink 
        className="text-green-100 dark:text-opacity-75 flex items-center p-2 font-bold hover:text-green-700 dark:hover:text-green-100 transition-colors duration-500" 
        to="/"
      >
        <FaHome className="mr-2" /> 
        Strona główna
      </NavLink>
      <NavLink 
        className="text-green-100 dark:text-opacity-75 flex items-center p-2 font-bold hover:text-green-700 dark:hover:text-green-100 transition-colors duration-500" 
        to="/portfolio"
      >
        <FaLaptopCode className="mr-2" /> 
        Portfolio
      </NavLink>
      <NavLink 
        className="text-green-100 dark:text-opacity-75 flex items-center p-2 font-bold hover:text-green-700 dark:hover:text-green-100 transition-colors duration-500" 
        to="/blog"
      >
        <FaBlog className="mr-2" />
        Blog
      </NavLink>
      <NavLink 
        className="text-green-100 dark:text-opacity-75 flex items-center p-2 font-bold hover:text-green-700 dark:hover:text-green-100 transition-colors duration-500" 
        to="/about"
      >
        <FaUser className="mr-2" />
        O mnie
      </NavLink>
      <NavLink 
        className="text-green-100 dark:text-opacity-75 flex items-center p-2 font-bold hover:text-green-700 dark:hover:text-green-100 transition-colors duration-500" 
        to="/contact"
      >
        <FaEnvelopeOpenText className="mr-2" />
        Kontakt
      </NavLink>
    </nav>
  )
}
