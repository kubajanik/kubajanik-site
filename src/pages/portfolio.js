import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {FaPaperPlane, FaEye, FaGithubAlt} from 'react-icons/fa'
import projects from '../../content/projects.yaml'
import {Link} from 'gatsby'

export default function Portfolio() {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-3xl mb-2 dark:text-green-100">Portfolio</h1>
          <p className="mb-4 text-center dark:text-gray-400">
            Na tej stronie chciałbym pokazać stworzone przeze mnie projekty, 
            zarówno mniejsze jak i większe. Każdy pozycja zawiera link do działającej aplikacji oraz
            link do repozytorium na Githubie, gdzie znajdziesz więcej informacji na temat projektu.
          </p>
          <Link
            className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
            to="/contact"
          >
            <FaPaperPlane className="mr-2" /> 
            Skontakuj się
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 flex flex-wrap flex-col md:flex-row">
          {projects.map((project, i) => (
            <div className="md:w-1/2 mb-4 px-4" key={i}>
              <div className="bg-gray-100 dark:bg-gray-800 relative rounded">
                <img className="mb-0 rounded-t" src={project.image} alt=""/>
                <div className="p-5">
                  <h5 className="mb-3 font-bold text-base dark:text-green-100">{project.title}</h5>
                  <p className="text-sm dark:text-gray-400">{project.description}</p>
                </div>
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
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
