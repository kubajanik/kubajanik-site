import React from 'react'
import Layout from '../components/layout'
import {FaGithubAlt, FaLinkedinIn, FaStackOverflow} from 'react-icons/fa'

export default function Contact() {
  return (
    <Layout>
      <section className="py-12 bg-gray-100">
        <div className="mx-auto flex flex-col items-center max-w-4xl px-4">
          <h2 className="font-bold text-3xl mb-2">Kontakt</h2>
          <p className="mb-4 text-center">
            Masz jakąś propozycję lub po prostu chcesz coś napisać? 
            Możesz wypełnić poniższy formularz kontaktowy lub wysłać maila na adres
            <a 
              className="text-green-500 hover:text-green-700 transition-colors duration-500 hover:underline" 
              href="mailto:jakubjanik00@gmail.com"
            >
              &nbsp;jakubjanik00@gmail.com
            </a>
          </p>
          <p className="mb-4">Chcesz się skontaktować? Objserwuj mnie na poniższych mediach społecznościowych.</p>
          <div className="flex">
            <a
              className="mr-4 mb-4 transition-colors duration-500 text-green-500 hover:text-green-700"
              href="https://github.com/jakubjanik1"
            >
              <FaGithubAlt size="1.25em" />
            </a>
            <a
              className="mr-4 mb-4 transition-colors duration-500 text-green-500 hover:text-green-700"
              href="https://linkedin.com/in/kuba-janik"
            >
              <FaLinkedinIn size="1.25em" />
            </a>
            <a
              className="mb-4 transition-colors duration-500 text-green-500 hover:text-green-700"
              href="https://stackoverflow.com/u/10536648"
            >
              <FaStackOverflow size="1.25em" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  )
}
