import React from 'react'
import {FaAdjust} from 'react-icons/fa'

export default function DarkMode() {
  const [isDarkMode, setIsDarkMode] = React.useState(() => 
    typeof window !== 'undefined' ? JSON.parse(window.localStorage.getItem('isDarkMode') ?? false) : false
  )

  React.useEffect(() => {
    const method = isDarkMode ? 'add' : 'remove'
    document.body.classList[method]('dark-mode')

    window.localStorage.setItem('isDarkMode', isDarkMode)
  }, [isDarkMode])

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-center font-bold text-sm mb-4 text-green-100">
        <FaAdjust className="mr-1" /> Tryb ciemny
      </div>

      <label className="border-green-300 dark:border-green-500 w-16 h-8 border-2 flex rounded-2xl cursor-pointer" >
        <input 
          type="checkbox" 
          hidden
          onChange={() => setIsDarkMode(!isDarkMode)} 
        />
        <div className={`${isDarkMode ? 'translate-x-full' : ''} w-1/2 h-full bg-green-300 dark:bg-green-500 rounded-2xl transform transition-transform ease-in duration-500 border-green-500 dark:border-gray-800 border-2`}></div>
      </label>
    </div>
  )
}
