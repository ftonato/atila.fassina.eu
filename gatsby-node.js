const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const blogPostTemplate = path.resolve('src/templates/blogTemplate/index.js')

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            excerpt(pruneLength: 250)
            html
            id
            frontmatter {
              date
              path
              title
              keywords
              image
              mediumURL
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }, index) => {
      const prev =
        index === 0
          ? false
          : result.data.allMarkdownRemark.edges[index - 1].node
      const next =
        index === result.data.allMarkdownRemark.edges.length - 1
          ? false
          : result.data.allMarkdownRemark.edges[index + 1].node

      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          prev,
          next
        }
      })
    })
  })
}
