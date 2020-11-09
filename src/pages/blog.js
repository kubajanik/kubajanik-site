import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

export default function Blog() {
  return (
    <Layout>
      <section className="py-12 bg-gray-100">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-3xl mb-2">Blog</h1>
          <p className="mb-4 text-center">
            Witaj na moim blogu. Subskrybuj i otrzymuj najnowsze artykuły na Twoją skrzynkę.
          </p>
          <form className="flex flex-col md:flex-row w-full px-8 sm:px-32 mb-0">
            <input
              className="w-full h-10 p-3 text-gray-600 rounded border border-gray-400 border-solid placeholder-gray-600 focus:border-green-500 focus:outline-none transition-colors duration-500"
              placeholder="Email"
            />
            <button
              className="h-10 p-3 mt-2 md:mt-0 md:ml-2 leading-none bg-green-500 rounded text-white font-bold hover:bg-green-700 transition-colors duration-500"
              type="submit"
            >
              Subskrybuj
            </button>
          </form>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 flex flex-col flex-wrap md:flex-row">
          {Array.from({length: 5}).map(() => (
            <div className="mb-4 px-4 md:w-1/3">
              <div className="bg-gray-100 rounded">
                <img className="mb-0 rounded-t" src="https://themes.3rdwavemedia.com/devcard/bs4/2.2/assets/images/blog/blog-post-thumb-card-5.jpg" alt=""/>
                <div className="p-5">
                  <Link to="/blog-post">
                    <h5 className="mb-3 font-bold text-lg hover:text-green-500 transition-colors duration-500 cursor-pointer">Learn React in 24 Hours</h5>
                  </Link>
                  <p className="mb-4 text-sm">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient...</p>
                </div>
                <div className="pb-3 px-5 text-gray-600 text-xs">1 miesiąc temu</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}
