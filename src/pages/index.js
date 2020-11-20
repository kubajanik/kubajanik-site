import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import Post from '../components/post'
import {FaArrowAltCircleRight, FaFileAlt} from 'react-icons/fa'
import {Link, graphql} from 'gatsby'
import projects from '../../content/projects.yaml'
import shuffle from 'lodash.shuffle'

export default function Home({data}) {
  const {nodes: latestPosts} = data.allMarkdownRemark
  const featuredProjects = shuffle(projects).slice(0, 4)

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
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
          <h2 className="font-bold text-3xl border-l-4 border-green-500 pl-4 md:col-span-2 dark:text-green-100">Przykładowe projekty</h2>
          {featuredProjects.map((project, i) => <Project key={i} project={project} />)}
        </div>
        <div className="flex justify-center py-4">
          <Link
            className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
            to="/portfolio"
          >
            <FaArrowAltCircleRight className="mr-2" /> 
            Zobacz portfolio
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-8">
        <div className="my-4 border-0 border-t border-solid border- dark:border-gray-600 dark:border-opacity-25" />
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-12">
          <h2 className="font-bold text-3xl border-l-4 border-green-500 pl-4 md:col-span-3 dark:text-green-100">Ostatnie artykuły</h2>
          {latestPosts.map(post => <Post key={post.id} post={{...post.frontmatter, ...post.fields, excerpt: post.excerpt}} />)}
        </div>
        <div className="flex justify-center py-4">
        <Link
          className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
          to="/blog"
        >
          <FaArrowAltCircleRight className="mr-2" /> 
          Zobacz blog
        </Link>
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