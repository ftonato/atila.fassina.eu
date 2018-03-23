import PostList from './PostList'
import PostRequest from './PostRequest'
import TextSection from './TextSection'

export default ({posts}) => (
  <div className="contentSections">
   <TextSection title='Writings'>
     <p>
       Mumblings of an anxious mind.
     </p>
     <p>
      I write on whatever I'm developing and studying.
     </p>
     <small>
       (or simply more interested at the moment)
     </small>
   </TextSection>
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
