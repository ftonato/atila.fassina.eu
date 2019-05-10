module.exports = {
  siteMetadata: {
    title: `Atila Fassina - Web Engineer`,
    description: `Web Engineer based in Auckland, very passionate about web performance, code maintainability and user-experience.`,
    author: `@atilafassina`,
    siteUrl: `https://atila.fassina.eu`
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-139459581-1`
      }
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/essays`,
        name: 'markdown-pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-responsive-iframe`,
          `gatsby-remark-reading-time`,
          {
            resolve: `gatsby-transformer-remark`,
            options: {
              plugins: [
                {
                  resolve: `gatsby-remark-prismjs`,
                  options: {}
                }
              ]
            }
          }
        ]
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Atila Fassina - Web Engineer`,
        short_name: `AFassina`,
        start_url: `/`,
        background_color: `rgb(0,0,0)`,
        theme_color: `rgb(10, 100, 0)`,
        display: `minimal-ui`,
        icon: `src/images/logo-whitebg.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
