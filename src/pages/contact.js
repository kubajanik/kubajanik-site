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
            Masz jakąś propozycję lub po prostu chcesz coś napisać? Możesz
            wypełnić poniższy formularz kontaktowy lub wysłać maila na adres
            <a
              className="text-green-500 hover:text-green-700 transition-colors duration-500 hover:underline"
              href="mailto:jakubjanik00@gmail.com"
            >
              &nbsp;jakubjanik00@gmail.com
            </a>
          </p>
          <p className="mb-4 text-center">
            Chcesz się skontaktować? Objserwuj mnie na poniższych mediach
            społecznościowych.
          </p>
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
      <section className="py-12">
        <form className="mx-auto max-w-4xl px-8 grid grid-cols-2 gap-4">
          <h3 className="text-center font-bold text-3xl col-span-2">
            Skontaktuj się
          </h3>

          <input
            className="h-10 p-3 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none"
            placeholder="Imię"
          />
          <input
            className="h-10 p-3 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none"
            placeholder="Email"
          />
          <textarea
            className="p-3 col-span-2 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none"
            rows="10"
            placeholder="Wprowadź twoją wiadomość"
          ></textarea>
          <button
            className="h-10 p-3 leading-none bg-green-500 rounded col-span-2 text-white font-bold hover:bg-green-700"
            type="submit"
          >
            Wyślij
          </button>
        </form>
      </section>
    </Layout>
  )
}
