import Cards from './cards'
import {cardList} from '../config'

export default () => (
  <div className="contentSections">
   <Cards cardList={cardList}/>
    <style jsx>{`
      .contentSections {
        min-height: 40vh;
        color: white;
        background-color: black;
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    `}</style>
  </div>
)
