export default ({posts}) => (
  <ul>
    {posts && posts.map( ({title, link, categories, date}) => (
      <li key={title}>
        <span>{date}</span>
        <a href={link} >
          {title}
        </a>
        <ul>
          {categories.map( category => (
            <li>{category}</li>
          ))}
        </ul>
      </li>
    )
  )}
  </ul>
)
