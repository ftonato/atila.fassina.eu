import Link from 'next/link'
import Page from '../layouts/page'
import Header from '../components/header'
import Content from '../components/contentSection'
import Footer from '../components/footer'
// import Social from '../components/social'
// import {social} from '../config'
// <Social socialList={social}/>

export default () => (<Page>
  <Header />
  <Content />
  <Footer />
</Page>)
