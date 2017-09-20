export default ({posts}) => (
  <ul className="list">
    {posts && posts.map( ({title, link, categories, date}) => (
      <li className="post" key={title}>
        <span>{date}</span>
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

    .tag {
      margin: 0 1em;
    }
  `}</style>
  </ul>
)
