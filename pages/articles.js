import 'isomorphic-fetch'
import Page from '../layouts/page'
import Header from '../components/header'
import Footer from '../components/footer'
import PostList from '../components/PostList'

async function getPosts () {
  const response = await fetch('https://blogium.wedeploy.io/atilafassina')
  return response.json()
}

const articles = props => (
  <Page>
    <Header internal={true}/>
    <PostList {...props}/>
    <Footer internal={true}/>
  </Page>
)

articles.getInitialProps = async () => {
  const posts = await getPosts()
  return {posts}
}

export default articles
