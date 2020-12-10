import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import {createSocialIcon} from '../../utils/helpers'
import Image from 'gatsby-image'

export default function Profile() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author {
            description
            social {
              github
              twitter
              linkedin
              stack
            }
          }
        }
      }

      profile: file(relativePath: {eq: "profile.png"}) {
        childImageSharp {
          fluid(maxWidth: 200) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  const {description, social} = data.site.siteMetadata.author

  return (
    <>
      <Image
        className="w-40 h-40 rounded-full mb-4"
        fluid={data.profile.childImageSharp.fluid}
        alt="profile"
      />
      <p className="text-sm text-green-100 text-center mb-4">{description}</p>
      <div className="flex flex-row py-2">
        {Object.entries(social).map(([name, link]) => (
          <a
            className="bg-green-100 text-green-500 dark:bg-green-500 dark:text-green-100 w-8 h-8 rounded-full grid place-items-center mr-2 transition-colors duration-500 hover:bg-opacity-75"
            href={link}
            target="_blank"
            rel="noreferrer"
            key={name}
          >
            {createSocialIcon(name)}
          </a>
        ))}
      </div>
    </>
  )
}
