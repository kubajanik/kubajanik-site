import React from 'react'
import {FaGithubAlt, FaEye} from 'react-icons/fa'

export default function Project({project}) {
  return (
    <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-800 relative rounded border border-solid dark:border-gray-600 dark:border-opacity-25">
      <img className="mb-0 rounded-t border-b border-solid dark:border-gray-600 dark:border-opacity-25" src={project.image} alt=""/>
      <div className="p-5">
        <h5 className="mb-3 font-bold text-base dark:text-green-100">{project.title}</h5>
        <p className="mb-4 text-sm dark:text-gray-400">{project.description}</p>
      </div>
      <div className="mt-auto pb-3 px-5 text-gray-600 text-xs">{project.tags.join(', ')}</div>
      <div className="rounded absolute inset-0 bg-gray-400 h-full w-full opacity-0 hover:bg-opacity-75 hover:opacity-100 cursor-pointer flex flex-col items-center justify-evenly transition-all duration-500 ease-in-out">
        <a
          className="flex items-center justify-center h-8 text-sm mb-4 mr-3 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt className="mr-2" /> 
          Github
        </a>
        <a
          className="flex items-center justify-center h-8 text-sm mb-4 mr-3 px-4 py-1 bg-gray-600 text-green-100 font-bold rounded hover:bg-gray-700 transition-colors duration-500"
          href={project.live}
          target="_blank"
          rel="noreferrer"
        >
          <FaEye className="mr-2" /> 
          Live
        </a>
      </div>
    </div>
  )
}
