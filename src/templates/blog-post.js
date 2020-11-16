import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import {graphql} from 'gatsby'
import 'prismjs/themes/prism-tomorrow.css'
import {Disqus, CommentCount} from 'gatsby-plugin-disqus'

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
      <article className="p-12">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-2 dark:text-green-100">{title}</h2>
          <div className="mb-4 text-sm text-gray-600">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{post.fields.readingTime.text}</span>
            <span className="mx-2">•</span>
            <a href="#comments" className="hover:text-gray-800 hover:underline">
              <CommentCount config={disqusConfig} />
            </a>
          </div>
          <div className="dark:text-gray-400 mb-12" dangerouslySetInnerHTML={{__html: post.html}}></div>
          <div id="comments">
            <Disqus config={disqusConfig} />
          </div>
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
        date(fromNow: true)
      }
      fields {
        readingTime {
          text
        }
      }
      html
      id
    }
  }
`