import React from 'react'
import Layout from '../components/layout'
import {FaArrowAltCircleRight, FaFileAlt} from 'react-icons/fa'

export default function Home() {
  return (
    <Layout>
      <section className="py-12 bg-gray-100">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-5xl mb-4">Jakub Janik</h1>
          <p className="mb-6 text-center">
            Jestem miłośnikiem programowania, zajmuję się głównie tworzeniem aplikacji webowych. 
            Piszę także o programowaniu na moim blogu. Chcesz zobaczyć coś więcej? 
            Spawdź portfolio z projektami oraz CV.
          </p>
          <div className="mb-6 flex">
            <a
              className="flex items-center justify-center h-10 mb-4 mr-3 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
              href="/portfolio"
            >
              <FaArrowAltCircleRight className="mr-2" /> 
              Zobacz portfolio
            </a>
            <a
              className="flex items-center justify-center h-10 mb-4 px-4 py-1 bg-gray-600 text-green-100 font-bold rounded hover:bg-gray-700 transition-colors duration-500"
              href="/resume"
            >
              <FaFileAlt className="mr-2" /> 
              Zobacz CV
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
