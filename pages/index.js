import Link from 'next/link'
import Page from '../layouts/page'
import Content from '../components/contentSection'
import Social from '../components/social'
import Footer from '../components/footer'
import {social} from '../config'

export default () => (<Page>
  <header className="top">
    <h1>
      <img className="logo" src="/static/logo.svg" alt="Atila Fassina"/>
    </h1>
  </header>
  <Content />
  <Social socialList={social}/>
  <Footer />
  <style jsx>{`
    .top {
      min-height: 40vh;
      display: flex; flex-flow: column;
      justify-content: center;
      align-items: center;
    }

    .logo {
      height: 15rem;
      margin: 5rem 0;
    }
  `}</style>
</Page>)


//<Link href="/static/oldblog/index.html">
      // <a>old stuff</a>
    // </Link>
