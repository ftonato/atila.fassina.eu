import 'isomorphic-fetch'
import Page from '../layouts/page'
import Header from '../components/header'
import Footer from '../components/footer'
import PostList from '../components/PostList'

async function getPosts (username) {
  const response = await fetch(`https://blogium.wedeploy.io/${username}`)
  return response.json()
}

const articles = props => (
  <Page>
    <Header />
    <PostList {...props} />
    <Footer />
  </Page>
)

articles.getInitialProps = async () => {
  const posts = await getPosts('atilafassina')
  return {posts}
}

export default articles
