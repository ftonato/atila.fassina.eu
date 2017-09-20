function getDate (string) {
  const dateObj = new Date(string)

  return `${dateObj.getFullYear()}-${dateObj.getMonth()}-${dateObj.getDay()}`
}

export default ({posts}) => (
  <ul className="list">
    {posts && posts.map( ({title, link, categories, date, image}) => (
      <li className="post" key={title}>
        <span>{getDate(date)}</span>
        <div>
          <img className="image" src={image} />
        </div>
        <a href={link} >
          {title}
        </a>
        <ul className="list">
          {categories.map( category => (
            <li className="tag" key={category}>{category}</li>
          ))}
        </ul>
      </li>
    )
  )}
  <style jsx>{`
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
      width: 100%;
      margin: 2em 0;
      display: flex;
      flex-flow: column;
      justify-content: center;
      text-align: center;
    }

    .image {
      max-height: 10rem;
    }

    .tag {
      margin: 0 1em;
    }
  `}</style>
  </ul>
)
