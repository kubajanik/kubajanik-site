import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {FaArrowAltCircleRight, FaFileAlt} from 'react-icons/fa'
import {Link, graphql} from 'gatsby'

export default function Home({data}) {
  const {nodes: latestPosts} = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Strona główna" />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-5xl mb-4 dark:text-green-100">Kuba Janik</h1>
          <p className="mb-6 text-center dark:text-gray-400">
            Jestem miłośnikiem programowania, zajmuję się głównie tworzeniem aplikacji webowych. 
            Piszę także o programowaniu na moim blogu. Chcesz zobaczyć coś więcej? 
            Spawdź portfolio z projektami oraz CV.
          </p>
          <div className="mb-6 flex">
            <Link
              className="flex items-center justify-center h-10 mb-4 mr-3 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
              to="/portfolio"
            >
              <FaArrowAltCircleRight className="mr-2" /> 
              Zobacz portfolio
            </Link>
            <Link
              className="flex items-center justify-center h-10 mb-4 px-4 py-1 bg-gray-600 text-green-100 font-bold rounded hover:bg-gray-700 transition-colors duration-500"
              to="/resume"
            >
              <FaFileAlt className="mr-2" /> 
              Zobacz CV
            </Link>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          <h2 className="font-bold text-3xl border-l-4 border-green-500 pl-4 md:col-span-3 dark:text-green-100">Ostatnie artykuły</h2>
          {latestPosts.map(post => (
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

export const latestPostsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: ASC},
      limit: 3
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