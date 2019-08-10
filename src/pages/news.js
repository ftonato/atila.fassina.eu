import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Header from '../components/header'
import Subscribe from '../components/subscribe'
import Footer from '../components/footer'
import NewsletterPitch from '../components/newsletter-pitch'

const NewsletterPage = () => (
  <Layout>
    <SEO
      title="News, the Letter. By Atila Fassina"
      keywords={[
        'web',
        'development',
        'frontend',
        'engineering',
        'javascript',
        'nodejs'
      ]}
    />
    <Header internal={true} />
    <NewsletterPitch />
    <Subscribe internal={false} />
    <Footer />
  </Layout>
)

export default NewsletterPage
