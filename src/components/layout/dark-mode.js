import React from 'react'
import {FaAdjust} from 'react-icons/fa'
import {ThemeToggler} from 'gatsby-plugin-dark-mode'

export default function DarkMode() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center font-bold text-sm mb-4 text-green-100">
        <FaAdjust className="mr-1" /> Tryb ciemny
      </div>

      <ThemeToggler>
        {({theme, toggleTheme}) => (
           <label className="border-green-300 dark:border-green-500 w-16 h-8 border-2 flex rounded-2xl cursor-pointer" >
           <input 
             type="checkbox" 
             hidden
             onChange={() => toggleTheme(theme === 'dark-mode' ? 'light-mode' : 'dark-mode')} 
           />
           <div className={`${theme === 'dark-mode' ? 'translate-x-full' : ''} w-1/2 h-full bg-green-300 dark:bg-green-500 rounded-2xl transform transition-transform ease-in duration-500 border-green-500 dark:border-gray-800 border-2`} />
         </label>
        )}
      </ThemeToggler>
    </div>
  )
}
