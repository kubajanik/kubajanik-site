import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Project from '../components/project'
import {FaPaperPlane} from 'react-icons/fa'
import {Link, graphql} from 'gatsby' 

export default function Portfolio({data}) {
  return (
    <Layout>
      <SEO title="Portfolio" />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-3xl mb-2 dark:text-green-100">Portfolio</h1>
          <p className="mb-4 text-center dark:text-gray-400">
            Na tej stronie chciałbym pokazać stworzone przeze mnie projekty. Każdy pozycja zawiera link do działającej strony oraz
            link do repozytorium na Githubie, gdzie znajdziesz więcej informacji na temat projektu.
          </p>
          <Link
            className="flex items-center justify-center h-10 px-4 py-1 bg-green-500 text-green-100 font-bold rounded hover:bg-green-700 transition-colors duration-500"
            to="/contact"
          >
            <FaPaperPlane className="mr-2" /> 
            Skontakuj się
          </Link>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
          {data.allProjects.nodes.map((project, i) => <Project key={i} project={project} />)}
        </div>
      </section>
    </Layout>
  )
}

export const projectsQuery = graphql`
  query {
    allProjects {
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