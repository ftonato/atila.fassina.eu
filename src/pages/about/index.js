import React from 'react'
import Layout from '../../components/layout'
import SEO from '../../components/seo'
import Header from '../../components/header'
import Footer from '../../components/footer'
import AboutContent from '../../components/aboutContent'

export default () => (
  <Layout>
    <SEO title="About" />
    <Header internal={true} />
    <AboutContent />
    <Footer internal />
  </Layout>
)
