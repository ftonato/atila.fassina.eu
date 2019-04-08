import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
// import Content from '../components/contentSection'
import Footer from '../components/footer'

const IndexPage = () => (
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
    <Header />
    {/* <Content props={{}} /> */}
    <Footer />
  </Layout>
)

// const IndexPage = () => (
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
