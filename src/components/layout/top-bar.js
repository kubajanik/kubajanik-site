import React from 'react'
import {HiOutlineMenu, HiX} from 'react-icons/hi'

export default function TopBar({isOpen, onToggle}) {
  const ToggleIcon = isOpen ? HiX : HiOutlineMenu

  return (
    <div className="flex justify-between lg:justify-center w-full items-center">
      <ToggleIcon 
        className="lg:hidden text-white cursor-pointer"
        size="2.5em"
        onClick={onToggle} 
      />
      <h1 className="text-2xl font-bold text-green-100">Jakub Janik</h1>
      <div className="w-8 lg:hidden"></div>
    </div>
  )
}
