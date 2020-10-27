import React from 'react'
import Layout from '../components/layout'
import {FaPaperPlane} from 'react-icons/fa'

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
    </Layout>
  )
}
