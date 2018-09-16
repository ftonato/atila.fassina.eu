import 'isomorphic-fetch'
import { Component } from 'react'
import Page from '../layouts/page'
import Header from '../components/header'
import Content from '../components/contentSection'
import Footer from '../components/footer'

class Main extends Component {
  state = {
    posts: []
  }
  
  getPosts = async () => {
    const response = await fetch('https://blogium-service-apcafewmjf.now.sh/atilafassina')
    
    return response.json()
  }

  componentDidMount = async () => {
    const posts = await this.getPosts()
    
    this.setState({ posts })
  }

  render () {
    return (
      <Page>
        <Header />
        <Content {...this.state}/>
        <Footer />
      </Page>
    )
  }
}

export default Main