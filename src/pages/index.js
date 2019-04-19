import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
// import Content from '../components/contentSection'
import Footer from '../components/footer'

const IndexPage = ({ data }) => {
  // const mediumPosts = (data.allMediumPost || {}).edges
  const posts = (data.allMarkdownRemark || {}).edges || []

  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          'web',
          'development',
          'frontend',
          'engineering',
          'javascript',
          'nodejs'
        ]}
      />
      <Header data={data} internal={false} />
      {/* <Content posts={mediumPosts} /> */}
      {posts.map(post => (
        <span>{post.node.frontmatter.title}</span>
      ))}
      <Footer />
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
          }
        }
      }
    }
  }
`

// const IndexPage = () => (
// allMediumPost(sort: { fields: [createdAt], order: DESC }) {
//   edges {
//     node {
//       id
//       title
//       virtuals {
//         subtitle
//         previewImage {
//           imageId
//         }
//       }
//       author {
//         name
//       }
//     }
//   }
// }
//   <Layout>
//     <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link>
//   </Layout>
// )

export default IndexPage
