import Intro from './Intro'
import PostList from './PostList'
import PostRequest from './PostRequest'
import TextSection from './TextSection'

export default ({posts}) => (
  <div className="contentSections">
   <Intro />
   <PostList posts={posts} />
   <PostRequest />
    <style jsx>{`
      .contentSections {
        min-height: 40vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
      }
    `}</style>
  </div>
)
