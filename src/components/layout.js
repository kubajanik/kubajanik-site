import React from 'react'
import {FaGithubAlt, FaLinkedinIn, FaStackOverflow} from 'react-icons/fa'

export default function Layout() {
  return (
    <header className="w-64 h-screen bg-green-500 flex flex-col items-center text-white px-4 py-6">
      <h1 className="text-2xl pb-6 font-bold">Jakub Janik</h1>
      <img className="w-40 h-40 rounded-full mb-4" src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/profile.png" alt="profile"/>
      <p className="text-sm text-center mb-4">
        Cześć, nazywam się Jakub Janik, 
        mam 19 lat i jestem pasjonatem programowania. 
      </p>
      <div className="flex flex-row py-2">
        <a className="bg-white w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75" href="https://github.com/jakubjanik1">
          <FaGithubAlt color="#48bb78" />
        </a>
        <a className="bg-white w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75" href="https://linkedin.com/in/kuba-janik">
          <FaLinkedinIn color="#48bb78" />
        </a>
        <a className="bg-white w-8 h-8 rounded-full grid place-items-center transition-colors duration-500 hover:bg-opacity-75" href="https://stackoverflow.com/u/10536648">
          <FaStackOverflow color="#48bb78" />
        </a>
      </div>
      <hr className="w-full my-4 border-solid border-green-600" />
    </header>    
  )
}
