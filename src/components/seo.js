import React from 'react'
import {string, object, arrayOf} from 'prop-types'
import {Helmet} from 'react-helmet'
import {graphql, useStaticQuery} from 'gatsby'

export default function SEO({title, description, lang, meta}) {
  const {site} = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        }
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: 'pl',
  meta: [],
  description: ''
}

SEO.propTypes = {
  description: string,
  lang: string,
  meta: arrayOf(object),
  title: string.isRequired
}