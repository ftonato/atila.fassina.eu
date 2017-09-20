import Link from 'next/link'

function getLink (section) {
  switch (section) {
    case 'articles':
    return '/articles'

    case 'projects':
    return 'https://github.com/atilafassina'

    case 'talks':
    return 'https://speakerdeck.com/atilafassina'
  }
}

export default ({cardList = []}) => (<div>
  <ul className="cardList">
    {cardList.map( ({name, url}) => (
      <li className="card" key={name}>
        <Link prefetch href={getLink(name)}>
          <a target="_blank">
            <div className="cardIcon">
               <img src={`/static/${name}.svg`} className={`${name}`} alt={`${name}`}/>
            </div>
            <h3 className="cardName">{name}</h3>
          </a>
        </Link>
      </li>
    ))}
  </ul>
  <style jsx>{`
    .cardList {
      width: 80vw; height: 100%;
      margin: 10rem 0;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: center;
    }

    .card {
      margin: 1rem 0;
      min-width: 30%;
      width: 80%; height: 15rem;
      display: flex; flex-flow: column;
      justify-content: center;
      align-items: center;
      color: black;
      background-color: white;
      border-top: solid 2px transparent;
      border-bottom: solid 2px transparent;
      border-radius: 2px;
    }

    .card a { text-decoration: none; }

    .card:hover .cardName,
    .card .cardName:focus {
      color: rgb(30, 200, 10);
    }

    .card:hover {
      border-top-color: rgb(30, 200, 10);
      border-bottom-color: rgb(30, 200, 10);
    }

    .cardIcon {
      height: 10rem; max-width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
    }

    .cardIcon img { width: 100%; max-height: 100%; }
    .projects { max-height: 80% !important }

    .cardName {
      text-align: center;
      font-size: 2rem;
      color: black;
      margin: .5rem 0 2rem;
    }

    @media (min-width: 860px) {
      .cardList {
        flex-flow: row;
      }

      .card {
        width: auto;
        margin: auto;
      }
    }
  `}</style>
</div>)
