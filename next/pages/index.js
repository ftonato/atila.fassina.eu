import 'isomorphic-fetch'
import Page from '../layouts/page'
import Header from '../components/header'
import Content from '../components/contentSection'
import Footer from '../components/footer'

const getPosts = async () => {
  const response = await fetch(
    'https://blogium-service-apcafewmjf.now.sh/atilafassina'
  )

  return response.json()
}

const Main = props => (
  <Page>
    <Header />
    <Content {...props} />
    <Footer />
  </Page>
)

Main.getInitialProps = async () => {
  const posts = await getPosts()

  return { posts }
}

export default Main
