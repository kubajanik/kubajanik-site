import React from 'react'
import Layout from '../components/layout'
import {FaGithubAlt, FaLinkedinIn, FaStackOverflow} from 'react-icons/fa'
import {useForm} from 'react-hook-form'

export default function Contact() {
  const {handleSubmit, register, errors} = useForm()
  const onSubmit = () => {}

  return (
    <Layout>
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h2 className="font-bold text-3xl mb-2 dark:text-green-100">Kontakt</h2>
          <p className="mb-4 text-center dark:text-gray-400">
            Masz jakąś propozycję lub po prostu chcesz coś napisać? Możesz
            wypełnić poniższy formularz kontaktowy lub wysłać maila na adres
            <a
              className="text-green-500 hover:text-green-700 transition-colors duration-500 hover:underline"
              href="mailto:jakubjanik00@gmail.com"
            >
              &nbsp;jakubjanik00@gmail.com
            </a>
          </p>
          <p className="mb-4 text-center dark:text-gray-400">
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
        <form className="mx-auto max-w-3xl px-8 grid grid-cols-2 gap-4" onSubmit={handleSubmit(onSubmit)}>
          <h3 className="text-center font-bold text-3xl col-span-2 text-green-100">
            Skontaktuj się
          </h3>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <input
              className="h-10 p-3 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none transition-colors duration-500"
              placeholder="Imię"
              name="name"
              ref={register({ required: 'Wprowadź swoje imię' })}
            />
            {errors.name && <div className="text-sm text-red-500 py-2">{errors.name.message}</div>}
          </div>

          <div className="flex flex-col col-span-2 md:col-span-1">
            <input
              className="h-10 p-3 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none transition-colors duration-500"
              placeholder="Email"
              name="email"
              ref={register({
                required: 'Wprowadź swojego maila',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Wprowadź poprawny adres email'
                }
              })}
            />
            {errors.email && <div className="text-sm text-red-500 py-2">{errors.email.message}</div>}
          </div>

          <div className="flex flex-col col-span-2 ">
            <textarea
              className="p-3 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none transition-colors duration-500"
              rows="10"
              placeholder="Wprowadź twoją wiadomość"
              name="message"
              ref={register({ required: 'Wprowadź twoją wiadomość' })}
            ></textarea>
            {errors.message && <div className="text-sm text-red-500 py-2">{errors.message.message}</div>}
          </div>

          <button
            className="h-10 p-3 leading-none bg-green-500 rounded col-span-2 text-white font-bold hover:bg-green-700 focus:bg-green-700 focus:outline-none transition-colors duration-500"
            type="submit"
          >
            Wyślij
          </button>
        </form>
      </section>
    </Layout>
  )
}
