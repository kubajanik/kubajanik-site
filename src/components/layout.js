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
import {HiOutlineMenu, HiX} from 'react-icons/hi'
import {Link} from 'gatsby'

export default function Layout({children}) {
  const [isOpen, setIsOpen] = React.useState(false)
  const ToggleIcon = isOpen ? HiX : HiOutlineMenu

  return (
    <div className="flex flex-col md:flex-row">
      <header className="w-screen md:w-64 md:h-screen bg-green-500 px-4 py-6">
        <div className="flex justify-between md:justify-center w-full items-center">
          <ToggleIcon size="2.5em" className="md:hidden text-white cursor-pointer" onClick={() => setIsOpen(!isOpen)} />
          <h1 className="text-2xl font-bold text-green-100">Jakub Janik</h1>
          <div className="w-8 md:hidden"></div>
        </div>

        <div className={`flex md:flex flex-col items-center text-white mt-6 ${!isOpen && 'hidden'}`}>
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

          <nav className="flex flex-col self-start md:self-center">
            <Link className="text-green-100 flex items-center p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/">
              <FaHome className="mr-2" />
              Strona główna
            </Link>
            <Link className="text-green-100 flex items-center p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/portfolio">
              <FaLaptopCode className="mr-2" />
              Portfolio
            </Link>
            <Link className="text-green-100 flex items-center p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/blog">
              <FaBlog className="mr-2" />
              Blog
            </Link>
            <Link className="text-green-100 flex items-center p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/about">
              <FaUser className="mr-2" />
              O mnie
            </Link>
            <Link className="text-green-100 flex items-center p-2 font-bold hover:text-green-900 transition-colors duration-300" to="/contact">
              <FaEnvelopeOpenText className="mr-2" />
              Kontakt
            </Link>
          </nav>

          <hr className="w-full mt-4 mb-6 border-solid border-green-600" />

          <div className="flex flex-col items-center">
            <div className="flex items-center font-bold text-sm mb-4">
              <FaAdjust className="mr-1" /> Tryb ciemny
            </div>

            <label className="border-green-300 w-16 h-8 border-2 flex rounded-2xl cursor-pointer" >
              <input type="checkbox" hidden onChange={e => e.target.nextSibling.classList.toggle('translate-x-full')} />
              <div className="w-1/2 h-full bg-green-300 rounded-2xl transform transition-transform ease-in duration-500 border-green-500 border-2"></div>
            </label>
          </div>
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>  
  )
}
