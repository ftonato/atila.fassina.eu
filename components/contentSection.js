import Link from 'next/link'
import PostList from './PostList'
import TextSection from './TextSection'
import {colors} from '../config'

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
   <TextSection title='Post requests'>
      <p>
        If there's anything you feel like having me writing about:
      </p>
      <small>(for whatever reason)</small>
      <ul className='buttonList'>
       <li>
          <Link href='https://github.com/atilafassina/atila.fassina.eu/issues/new?labels=post-request'>
            <a className='shareButton' target='_blank'>Open an issue</a>
          </Link>
        </li>
       <li>
         <Link href='https://twitter.com/intent/tweet?hashtags=PostRequest&text=@atilafassina ✎'>
          <a className='shareButton' target='_blank'>
            Drop me a line
          </a>  
        </Link>
        </li>
     </ul>
     <p>
       But please: <span className='subject'>web tech</span> only 😉
     </p>
    </TextSection>
    <style jsx>{`
      .contentSections {
        min-height: 40vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
      }

      .buttonList {
        width: 100%;
        margin: 10ch 0;
        list-style: none;
        display: flex;
        justify-content: center;
      }
      
      .buttonList li { margin-left: 5em; }
      .buttonList li:first-of-type { margin-left: 0; }

      .shareButton {
        padding: 2ch 5ch;
        background-color: white;
        color: black;
        text-decoration: none;
        cursor: pointer;
        font-size: 1.2em;
        border-top: 3px solid transparent;
        border-bottom: 3px solid transparent;
      }

      .shareButton:hover,
      .shareButton:active {
        border-top-color: ${colors.RADIOACTIVE_LIME};
        border-bottom-color: ${colors.RADIOACTIVE_LIME};
      }

      .subject {
        color: ${colors.RADIOACTIVE_LIME};
        font-style: italic;
      }
    `}</style>
  </div>
)
