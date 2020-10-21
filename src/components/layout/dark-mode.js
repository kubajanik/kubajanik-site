import React from 'react'
import {FaAdjust} from 'react-icons/fa'

export default function DarkMode() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center font-bold text-sm mb-4">
        <FaAdjust className="mr-1" /> Tryb ciemny
      </div>

      <label className="border-green-300 w-16 h-8 border-2 flex rounded-2xl cursor-pointer" >
        <input 
          type="checkbox" 
          hidden 
          onChange={
            e => e.target.nextSibling.classList.toggle('translate-x-full')
          } 
        />
        <div className="w-1/2 h-full bg-green-300 rounded-2xl transform transition-transform ease-in duration-500 border-green-500 border-2"></div>
      </label>
    </div>
  )
}
