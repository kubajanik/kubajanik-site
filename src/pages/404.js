import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link} from 'gatsby'
import {FaHome} from 'react-icons/fa'

export default function NotFound() {
  return (
    <Layout>
      <SEO title="Nie znaleziono" />
      <section className="py-12 h-full flex flex-col justify-center items-center">
        <h1 className="font-bold text-5xl text-center">Nie znaleziono</h1>
        <Link
          className="flex items-center justify-center h-10 mt-5 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
          to="/"
        >
          <FaHome className="mr-2" /> 
          Strona główna
        </Link>
      </section>
    </Layout>
  )
}
