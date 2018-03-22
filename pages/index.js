import 'isomorphic-fetch'
import Link from 'next/link'
import Page from '../layouts/page'
import Header from '../components/header'
import Content from '../components/contentSection'
import Footer from '../components/footer'

async function getPosts () {
  const response = await fetch('https://blogium.wedeploy.io/atilafassina')
  return response.json()
}

const main = props => (<Page>
  <Header />
  <Content {...props}/>
  <Footer />
</Page>)


main.getInitialProps = async () => {
  const posts = await getPosts()
  return {posts}
}

export default main