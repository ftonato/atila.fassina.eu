import { Component } from 'react'
import Link from 'next/link'
import TextSection from './TextSection'
import {colors} from '../config'

function getDate (string) {
  const dateObj = new Date(string)

  return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
}

export default class PostList extends Component {

  state = {
    showPosts: 6
  }

  showMorePosts = () => {
    this.setState(() => ({ showPosts: this.state.showPosts + 6 }))
  }
  
  render ()  {
    const {posts=[]} = this.props

    return (
      <div className="wrapper">
        <h2 className='pageTitle'>Writings</h2>
        <ul className="list">
          {posts.slice(0,this.state.showPosts).map( ({title, link, categories, date, image}) => (
            <li className="post" key={title}>
              <Link href={link}>
                <a target="_blank">
                  <h2 className="title">{title}</h2>
                  <div>
                    <img
                      className="image"
                      src={image}
                      aria-hidden
                    />
                  </div>
                  <span className="date">{getDate(date)}</span>
                </a>
              </Link>
            </li>
          ))}
        </ul>
        <button className='loadButton' onClick={this.showMorePosts}>load more</button>
        <style jsx>{`
          .wrapper {
            background-color: ${colors.COLD_FOG};
            display: flex;
            flex-direction: column;
          }

          .pageTitle {
            margin: 3ex 0 1ex;
            display: block;
            text-align: center;
            font-size: 3em;
            color: ${colors.BRUSHED_STEEL};
          }

          .list {
            width: 90%;
            list-style: none;
            margin: 0 auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .post {
            width: 40ex;
            min-height: 45ex;
            margin: 5ex 0.5ex;
            background-color: white;
            display: flex;
            flex-flow: column;
            justify-content: space-around;
            align-items: center;
            border: 3px solid ${colors.BERLINER_SKY};
            animation: fadeUp 1.5s;
          }

          .post:hover,
          .post:active {
            border-top-color: ${colors.RADIOACTIVE_LIME};
            border-bottom-color: ${colors.RADIOACTIVE_LIME};
          }

          .post a {
            display: block;
            height: 100%;
            width: 100%;
            text-decoration: none;
          }

          .date {
            padding: 2ex 0;
            display: block;
            text-align: center;
            color: ${colors.BRUSHED_STEEL};
          }

          .title {
            color: ${colors.BRUSHED_STEEL};
            margin-bottom: 2ex;
            height: ${1.5 * 3}em;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
          }

          .image {
            height: 20ex;
            width: 100%;
            object-fit: contain;
          }

          .loadButton {
            margin: 3ch auto 5ch;
            padding: 2ch 4ch;
            font-size: 1.2em;
            background-color: ${colors.BERLINER_SKY};
            border: 3px solid white;
            cursor: pointer;
          }

          .loadButton:hover,
          .loadButton:active {
            background-color: white;
            border-top-color: ${colors.RADIOACTIVE_LIME};
            border-bottom-color: ${colors.RADIOACTIVE_LIME};
          }

          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(35px)
            }

            100% {
              opacity: 1;
              transform: translateY(0)
            }
          }
        `}</style>
      </div>
    )
  }
}