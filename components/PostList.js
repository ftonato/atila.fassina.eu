const colors = {
  grey: 'rgb(50,50,50)'
}

function getDate (string) {
  const dateObj = new Date(string)

  return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
}

export default ({posts}) => (
  <div>
    <ul className="list">
      {posts && posts.map( ({title, link, categories, date, image}) => (
        <li className="post" key={title}>
          <span className="date">{getDate(date)}</span>
          <a className="title" href={link} target="_blank">
            <h2>{title}</h2>
            <div>
              <img className="image" src={image} />
            </div>
          </a>
          <ul className="list">
            {categories.map( category => (
              <li className="tag" key={category}>{category}</li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
    <style jsx>{`
      .postListHeader {
        width: 100%;
        position: sticky;
        top: 0;
        background-color: black;
        text-align: center;
        color: rgb(230,230,230);
        font-size: 2.5rem;
        line-height: 1;
        padding: 2em 0;
      }
      .list {
        width: 80%;
        list-style: none;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
      }

      .post {
        z-index: 1;
        background-color: white;
        width: 100%;
        margin: 2em 0;
        display: flex;
        flex-flow: column;
        justify-content: center;
        text-align: center;
      }

      .date {
        position: relative;
        bottom: -1rem;
        font-size: .8rem;
        color: ${colors.grey};
      }

      .title {
        font-size: 2rem;
        color: black;
        text-decoration: none;
      }

      .image {
        opacity: .7;
        max-height: 10rem;
      }

      .tag {
        color: ${colors.grey};
        padding: .2em .5em;
        border: dashed 1px ${colors.grey};
        border-radius: 2px;
        margin: .5em 1em;
      }
    `}</style>
  </div>
)
