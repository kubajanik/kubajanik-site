const path = require('path')
const {createFilePath} = require('gatsby-source-filesystem')

exports.createPages = async ({actions, graphql}) => {
  const blogPost = path.resolve('./src/templates/blog-post.js')

  const {data} = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `)

  const posts = data.allMarkdownRemark.nodes

  if (posts.length > 0) {
    posts.forEach(post => {
      actions.createPage({
        path: post.fields.slug,
        component: blogPost,
        context: {
          id: post.id
        }
      })
    })
  }
}

exports.onCreateNode = ({node, actions, getNode}) => {
  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({node, getNode})

    actions.createNodeField({
      name: 'slug',
      node,
      value
    })
  }
}