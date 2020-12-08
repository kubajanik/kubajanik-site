import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import {Disqus} from 'gatsby-plugin-disqus'
import {defineCustomElements} from '@deckdeckgo/highlight-code/dist/loader'
defineCustomElements()

export default function BlogPost({data}) {
  const post = data.markdownRemark
  const {title, date} = post.frontmatter
  const disqusConfig = {
    identifier: post.id,
    title
  }

  return (
    <Layout>
      <SEO title={title} />
      <article className="py-12 px-8 md:px-12">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-2 dark:text-green-100">{title}</h2>
          <div className="mb-4 text-sm text-gray-600">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{Math.ceil(post.fields.readingTime.minutes)} min</span>
          </div>
          <div className="markdown dark:text-gray-400 mb-12" dangerouslySetInnerHTML={{__html: post.html}}></div>
          <Disqus config={disqusConfig} />
        </div>
      </article>
    </Layout>
  )
}

export const postQuery = graphql`
  query($id: String!) {
    markdownRemark(id: {eq: $id}) {
      frontmatter {
        title
        date(fromNow: true, locale: "pl")
      }
      fields {
        readingTime {
          minutes
        }
      }
      html
      id
    }
  }
`