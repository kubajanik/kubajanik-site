import React from 'react'
import {
  FaGithubAlt,
  FaLinkedinIn,
  FaStackOverflow,
  FaHome,
  FaLaptopCode,
  FaBlog,
  FaUser,
  FaEnvelopeOpenText,
  FaAdjust
} from 'react-icons/fa'
import {Link} from 'gatsby'

export default function Layout() {
  return (
    <header className="w-64 h-screen bg-green-500 flex flex-col items-center text-white px-4 py-6">
      <h1 className="text-2xl pb-6 font-bold text-green-100">Jakub Janik</h1>
      <img className="w-40 h-40 rounded-full mb-4" src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/profile.png" alt="profile"/>
      <p className="text-sm text-green-100 text-center mb-4">
        Cześć, nazywam się Jakub Janik, 
        mam 19 lat i jestem pasjonatem programowania. 
      </p>
      <div className="flex flex-row py-2">
        <a className="bg-green-100 w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75" href="https://github.com/jakubjanik1">
          <FaGithubAlt color="#48bb78" />
        </a>
        <a className="bg-green-100 w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75" href="https://linkedin.com/in/kuba-janik">
          <FaLinkedinIn color="#48bb78" />
        </a>
        <a className="bg-green-100 w-8 h-8 rounded-full grid place-items-center transition-colors duration-500 hover:bg-opacity-75" href="https://stackoverflow.com/u/10536648">
          <FaStackOverflow color="#48bb78" />
        </a>
      </div>

      <hr className="w-full my-4 border-solid border-green-600" />

      <nav className="flex flex-col">
        <Link className="text-green-100 flex items-center gap-2 p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/">
          <FaHome />
          Strona główna
        </Link>
        <Link className="text-green-100 flex items-center gap-2 p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/portfolio">
          <FaLaptopCode />
          Portfolio
        </Link>
        <Link className="text-green-100 flex items-center gap-2 p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/blog">
          <FaBlog />
          Blog
        </Link>
        <Link className="text-green-100 flex items-center gap-2 p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/about">
          <FaUser />
          O mnie
        </Link>
        <Link className="text-green-100 flex items-center gap-2 p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/contact">
          <FaEnvelopeOpenText />
          Kontakt
        </Link>
      </nav>

      <hr className="w-full mt-4 mb-6 border-solid border-green-600" />

      <div className="flex flex-col items-center">
        <div className="flex items-center gap-1 font-bold text-sm mb-4">
          <FaAdjust /> Tryb ciemny
        </div>

        <label className="border-green-300 w-16 h-8 border-2 flex rounded-2xl cursor-pointer" >
          <input type="checkbox" hidden onChange={e => e.target.nextSibling.classList.toggle('translate-x-full')} />
          <div className="w-1/2 h-full bg-green-300 rounded-2xl transform transition-transform ease-in duration-500 border-green-500 border-2"></div>
        </label>
      </div>
    </header>    
  )
}
