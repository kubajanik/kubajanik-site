import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {Link, graphql} from 'gatsby'

export default function Blog({data}) {
  const {nodes: posts} = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-3xl mb-2 dark:text-green-100">Blog</h1>
          <p className="mb-4 text-center dark:text-gray-400">
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
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {posts.map(post => (
            <div key={post.id}>
              <div className="bg-gray-100 rounded dark:bg-gray-800 border border-solid dark:border-gray-600 dark:border-opacity-25">
                <img className="mb-0 rounded-t" src={require(`../../content/posts${post.fields.slug}cover.png`)} alt="cover"/>
                <div className="p-5">
                  <Link to={post.fields.slug}>
                    <h5 className="mb-3 font-bold text-lg dark:text-green-100 hover:text-green-500 dark:hover:text-green-500 transition-colors duration-500 cursor-pointer">{post.frontmatter.title}</h5>
                  </Link>
                  <p className="mb-4 text-sm dark:text-gray-400">{post.excerpt}</p>
                </div>
                <div className="pb-3 px-5 text-gray-600 text-xs">{post.frontmatter.date}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: ASC}
    ) {
      nodes {
        id
        excerpt
        fields {
          slug
        }
        frontmatter {
          title
          date(fromNow: true)
        }
      }
    }
  }
`