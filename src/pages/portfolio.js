import React from 'react'
import Layout from '../components/layout'
import {FaPaperPlane, FaEye, FaGithubAlt} from 'react-icons/fa'

export default function Portfolio() {
  return (
    <Layout>
      <section className="py-12 bg-gray-100">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-3xl mb-2">Portfolio</h1>
          <p className="mb-4 text-center">
            Na tej stronie chciałbym pokazać stworzone przeze mnie projekty, 
            zarówno mniejsze jak i większe. Każdy pozycja zawiera link do działającej aplikacji oraz
            link do repozytorium na Githubie, gdzie znajdziesz więcej informacji na temat projektu.
          </p>
          <a
            className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
            href="/portfolio"
          >
            <FaPaperPlane className="mr-2" /> 
            Skontakuj się
          </a>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-8 grid grid-cols-3 content-between gap-5">
          {[1, 2, 3].map(x => (
            <div className="bg-gray-100 relative rounded">
              <img className="mb-0 rounded-t" src="https://res.cloudinary.com/djc9jias4/image/upload/v1602411348/chat-app-css-illustration/mrlojgx9zagw8og6fr5w.png" alt=""/>
              <div className="p-5">
                <h5 className="mb-3 font-bold text-base">Chat CSS Illustration</h5>
                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, harum assumenda, perspiciatis porro et sed</p>
              </div>
              <div className="rounded absolute inset-0 bg-gray-400 h-full w-full opacity-0 hover:bg-opacity-75 hover:opacity-100 cursor-pointer flex flex-col items-center justify-evenly transition-all duration-500 ease-in-out">
                <a
                  className="flex items-center justify-center h-8 text-sm mb-4 mr-3 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
                  href="https://github.com/jakubjanik1/chat-app-css-illustration"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithubAlt className="mr-2" /> 
                  Github
                </a>
                <a
                  className="flex items-center justify-center h-8 text-sm mb-4 mr-3 px-4 py-1 bg-gray-600 text-green-100 font-bold rounded hover:bg-gray-700 transition-colors duration-500"
                  href="https://chat-app-css-illustration-indol.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaEye className="mr-2" /> 
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}