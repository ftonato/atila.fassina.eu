import Link from 'next/link'
import {colors} from '../config'

function getDate (string) {
  const dateObj = new Date(string)

  return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
}

export default ({posts}) => (
  <div className="wrapper">
    <ul className="list">
      {posts && posts.map( ({title, link, categories, date, image}) => (
        <li className="post" key={title}>
          <Link href={link}>
            <a target="_blank">
              <h2 className="title">{title}</h2>
              <div>
                <img className="image" src={image} />
              </div>
              <span className="date">{getDate(date)}</span>
            </a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .wrapper {
        background-color: rgb(245,245,245);
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

      .image { width: 100%; }

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
