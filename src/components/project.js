import React from 'react'
import {FaGithubAlt, FaEye} from 'react-icons/fa'
import Image from 'gatsby-image'

export default function Project({project}) {
  return (
    <div className="h-full flex flex-col bg-gray-100 dark:bg-gray-800 relative rounded border border-solid dark:border-gray-600 dark:border-opacity-25">
      <Image 
        className="mb-0 rounded-t border-b border-solid dark:border-gray-600 dark:border-opacity-25" 
        fluid={project.image.childImageSharp.fluid}
        alt={project.title}
      />
      <div className="p-5">
        <h5 className="mb-3 font-bold text-base dark:text-green-100">{project.title}</h5>
        <p className="mb-4 text-sm dark:text-gray-400">{project.description}</p>
      </div>
      <div className="mt-auto pb-3 px-5 text-gray-600 text-xs">{project.tags.join(', ')}</div>
      <div className="grid grid-cols-2">
        <a
          className="transition-colors duration-500 flex self-center border-t border-r border-solid rounded-bl items-center justify-center h-10 text-sm px-4 py-1 font-bold dark:border-gray-600 dark:border-opacity-25 dark:text-gray-400 hover:text-green-100 hover:bg-green-500"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithubAlt className="mr-2" /> 
          Github
        </a>
        <a
          className="transition-colors duration-500 flex self-center border-t border-solid rounded-br items-center justify-center h-10 text-sm px-4 py-1 font-bold dark:border-gray-600 dark:border-opacity-25 dark:text-gray-400 hover:text-green-100 hover:bg-gray-700"
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
