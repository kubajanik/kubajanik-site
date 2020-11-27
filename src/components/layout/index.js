import React from 'react'
import TopBar from './top-bar'
import Profile from './profile'
import Navigation from './navigation'
import DarkMode from './dark-mode'

export default function Layout({children}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <header className={`${isOpen && 'h-screen pb-4'} sticky top-0 bottom-0 z-10 lg:fixed w-screen overflow-y-auto lg:w-64 lg:h-screen bg-green-500 dark:bg-gray-800 py-2 px-3 lg:py-6 lg:px-4`}>
        <TopBar onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <div className={`flex lg:flex flex-col items-center text-white mt-6 ${!isOpen && 'hidden'}`}>
          <Profile />
          <hr className="w-full my-4 border-0 border-t border-solid border-green-600 dark:border-gray-600 dark:border-opacity-50" />
          <Navigation />
          <hr className="w-full mt-4 mb-6 border-0 border-t border-solid border-green-600 dark:border-gray-600 dark:border-opacity-50" />
          <DarkMode />
        </div>
      </header>
      <main className="lg:ml-64 w-full flex-1 dark:bg-gray-900">
        {children}
      </main>
    </div>  
  )
}
