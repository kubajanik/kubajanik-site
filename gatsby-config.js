module.exports = {
  siteMetadata: {
    title: `Kuba Janik`,
    description: `My personal website`,
    author: {
      name: `Kuba Janik`,
      description: `Cześć, nazywam się Kuba, mam 19 lat i jestem pasjonatem programowania.`,
      social: {
        github: `https://github.com/kubajanik`,
        linkedin: `https://linkedin.com/in/kuba-janik`,
        stack: `https://stackoverflow.com/u/10536648`,
        twitter: `https://twitter.com/kubajanik01`,
      }
    }
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kuba Janik`, 
        short_name: `KJ`,
        start_url: `/`,
        background_color: `#f0fff4`,
        theme_color: `#48bb78`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`
      }
    },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('tailwindcss')('./tailwind.config.js')]
      }
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `${__dirname}/src/utils/typography`,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-remark-highlight-code`,
            options: {
              theme: 'one-dark'
            }
          }
        ]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      }
    },
    {
      resolve: `gatsby-transformer-yaml`,
      options: {
        typeName: `Projects`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `kubajanik`
      }
    }
  ],
}
