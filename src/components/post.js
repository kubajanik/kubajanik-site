import React from 'react'
import {Link} from 'gatsby'
import Image from 'gatsby-image'

export default function Post({post}) {
  return (
    <div className="flex flex-col bg-gray-100 rounded dark:bg-gray-800 border border-solid dark:border-gray-600 dark:border-opacity-25">
      <Image 
        className="mb-0 rounded-t"
        fluid={post.cover.childImageSharp.fluid}
        alt={post.title}
      />
      <div className="p-5">
        <Link to={post.slug}>
          <h5 className="mb-3 font-bold text-lg dark:text-green-100 hover:text-green-500 dark:hover:text-green-500 transition-colors duration-500 cursor-pointer">
            {post.title}
          </h5>
        </Link>
        <p className="mb-4 text-sm dark:text-gray-400">{post.excerpt}</p>
      </div>
      <div className="mt-auto pb-3 px-5 text-gray-600 text-xs">{post.date}</div>
    </div>
  )
}
