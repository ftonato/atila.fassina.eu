import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Content from '../components/contentSection'
import Subscribe from '../components/subscribe'
import Footer from '../components/footer'

const IndexPage = ({ data }) => {
  const posts = (data.allMarkdownRemark || {}).edges || []

  return (
    <Layout>
      <SEO
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
      <Content posts={posts} />
      <Subscribe />
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
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            sprint
            path
            title
            pitch
          }
          fields {
            readingTime {
              text
              words
            }
          }
        }
      }
    }
  }
`

export default IndexPage
