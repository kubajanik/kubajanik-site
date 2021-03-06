import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Post from '../components/post'
import {graphql} from 'gatsby'

export default function Blog({data}) {
  const {nodes: posts} = data.allMarkdownRemark

  return (
    <Layout>
      <SEO title="Blog" />
      <section className="py-12 bg-gray-100 dark:bg-gray-900 border-b border-solid dark:border-gray-600 dark:border-opacity-25">
        <div className="mx-auto flex flex-col items-center max-w-3xl px-4">
          <h1 className="font-bold text-3xl mb-2 dark:text-green-100">Blog</h1>
          <p className="mb-4 text-center dark:text-gray-400">
            Witaj na moim blogu.
          </p>
        </div>
      </section>
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-8 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-4">
          {posts.map(post => <Post key={post.id} post={{...post.frontmatter, ...post.fields, excerpt: post.excerpt}} />)}
        </div>
      </section>
    </Layout>
  )
}

export const postsQuery = graphql`
  query {
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC}
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
  }
`