import React from 'react'
import {FaGithubAlt, FaLinkedinIn, FaStackOverflow} from 'react-icons/fa'

export default function Profile() {
  return (
    <>
      <img
        className="w-40 h-40 rounded-full mb-4"
        src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/profile.png"
        alt="profile"
      />
      <p className="text-sm text-green-100 text-center mb-4">
        Cześć, nazywam się Jakub Janik, mam 19 lat i jestem pasjonatem
        programowania.
      </p>
      <div className="flex flex-row py-2">
        <a
          className="bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-100 w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75"
          href="https://github.com/jakubjanik1"
        >
          <FaGithubAlt />
        </a>
        <a
          className="bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-100 w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75"
          href="https://linkedin.com/in/kuba-janik"
        >
          <FaLinkedinIn />
        </a>
        <a
          className="bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-100 w-8 h-8 rounded-full grid place-items-center transition-colors duration-500 hover:bg-opacity-75"
          href="https://stackoverflow.com/u/10536648"
        >
          <FaStackOverflow />
        </a>
      </div>
    </>
  )
}
