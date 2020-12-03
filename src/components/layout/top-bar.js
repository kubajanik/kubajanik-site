import React from 'react'
import {HiOutlineMenu, HiX} from 'react-icons/hi'
import {Link} from 'gatsby'

export default function TopBar({isOpen, onToggle}) {
  const ToggleIcon = isOpen ? HiX : HiOutlineMenu

  return (
    <div className="flex justify-between lg:justify-center w-full items-center">
      <ToggleIcon 
        className="lg:hidden text-green-100 cursor-pointer"
        size="2em"
        onClick={onToggle} 
      />
      <Link to="/">
        <h1 className="text-xl lg:text-2xl font-bold text-green-100">Kuba Janik</h1>
      </Link>
      <div className="w-8 lg:hidden"></div>
    </div>
  )
}
