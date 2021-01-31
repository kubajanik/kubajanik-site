import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import Post from '../components/post'
import {FaArrowAltCircleRight, FaBlog} from 'react-icons/fa'
import {Link, graphql} from 'gatsby'
import allSkills from '../../content/skills/index.yaml'
import * as icons from 'react-icons/si'

export default function Home({data}) {
  function getIcon(name, props) {
    const Icon = icons[name]
    return <Icon {...props} />
  }

  return (
    <Layout>
      <SEO title="Strona główna" />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-5xl mb-4 dark:text-green-100 text-center">Kuba Janik</h1>
          <p className="mb-6 text-center dark:text-gray-400">
            Jestem pasjonatem programowania, zajmuję się głównie tworzeniem aplikacji webowych. Chcesz zobaczyć coś więcej? 
            Sprawdź portfolio z projektami oraz mojego bloga.
          </p>
          <div className="flex flex-col xs:flex-row justify-center">
            <Link
              className="flex items-center justify-center h-10 mb-3 xs:mb-0 xs:mr-3 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
              to="/portfolio"
            >
              <FaArrowAltCircleRight className="mr-2" /> 
              Zobacz portfolio
            </Link>
            <Link
              className="flex items-center justify-center h-10 px-4 py-1 bg-gray-600 text-green-100 font-bold rounded hover:bg-gray-700 transition-colors duration-500"
              to="/blog"
            >
              <FaBlog className="mr-2" /> 
              Zobacz bloga
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 mb-4">
          <h2 className="font-bold text-3xl border-l-4 border-green-500 pl-4 dark:text-green-100">Technologie</h2>
          <div className="flex flex-wrap gap-8 justify-around pt-12">
            {allSkills.map((skill, i) => (
              <div key={i} className="w-32 p-4 bg-gray-100 dark:bg-gray-800 flex flex-col items-center justify-center rounded border border-solid dark:border-gray-600 dark:border-opacity-25">
                {getIcon(skill.icon, {style: {color: skill.color}, className: "text-3xl mb-2"})}
                <div className="font-bold text-base dark:text-green-100">{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-8">
        <div className="my-4 border-0 border-t border-solid border- dark:border-gray-600 dark:border-opacity-25" />
      </div>
    
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mb-12">
          <h2 className="font-bold text-3xl border-l-4 border-green-500 pl-4 md:col-span-2 dark:text-green-100">Przykładowe projekty</h2>
          {data.featuredProjects.nodes.map((project, i) => <Project key={i} project={project} />)}
        </div>
        <div className="flex justify-center py-4">
          <Link
            className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
            to="/portfolio"
          >
            <FaArrowAltCircleRight className="mr-2" /> 
            Zobacz więcej
          </Link>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-8">
        <div className="my-4 border-0 border-t border-solid border- dark:border-gray-600 dark:border-opacity-25" />
      </div>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 mb-12">
          <h2 className="font-bold text-3xl border-l-4 border-green-500 pl-4 md:col-span-3 dark:text-green-100">Ostatnie artykuły</h2>
          {data.latestPosts.nodes.map(post => <Post key={post.id} post={{...post.frontmatter, ...post.fields, excerpt: post.excerpt}} />)}
        </div>
        <div className="flex justify-center py-4">
        <Link
          className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
          to="/blog"
        >
          <FaArrowAltCircleRight className="mr-2" /> 
          Zobacz więcej
        </Link>
      </div>
      </section>
    </Layout>
  )
}

export const postsAndProjectsQuery = graphql`
  query {
    latestPosts: allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC},
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
          date(fromNow: true, locale: "pl")
          cover {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }

    featuredProjects: allProjects(
      limit: 4
    ) {
      nodes {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        github
        live
        description
        tags
      }
    }
  }
`