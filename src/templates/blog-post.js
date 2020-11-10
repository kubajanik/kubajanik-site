import React from 'react'
import Layout from '../components/layout'
import {graphql} from 'gatsby'

export default function BlogPost({data}) {
  const post = data.markdownRemark
  const {title, date} = post.frontmatter

  return (
    <Layout>
      <article className="p-12">
        <div className="mx-auto max-w-xl">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <div className="mb-4 text-sm text-gray-600">
            <span>{date}</span>
            <span className="mx-2">•</span>
            <span>{post.fields.readingTime.text}</span>
            <span className="mx-2">•</span>
            <span>4 comments</span>
          </div>
          <div dangerouslySetInnerHTML={{__html: post.html}}></div>
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
    }
  }
`