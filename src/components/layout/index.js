import React from 'react'
import TopBar from './top-bar'
import Profile from './profile'
import Navigation from './navigation'
import DarkMode from './dark-mode'

export default function Layout({children}) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="flex flex-col md:flex-row">
      <header className="w-screen md:w-64 md:h-screen bg-green-500 px-4 py-6">
        <TopBar onToggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
        <div className={`flex md:flex flex-col items-center text-white mt-6 ${!isOpen && 'hidden'}`}>
          <Profile />
          <hr className="w-full my-4 border-solid border-green-600" />
          <Navigation />
          <hr className="w-full mt-4 mb-6 border-solid border-green-600" />
          <DarkMode />
        </div>
      </header>
      <main>
        {children}
      </main>
    </div>  
  )
}
