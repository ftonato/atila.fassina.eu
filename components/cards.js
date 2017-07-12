import Link from 'next/link'

export default ({cardList = []}) => (<div>
  <ul className="cardList">
    {cardList.map( ({name, url}) => (
      <li className="card" key={name}>
        <Link href={url}>
          <a target="_blank">
            <div>
              <img src={`/static/${name}.svg`} className="cardIcon" alt={`${name}`}/>
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
      margin: 5rem 0;
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
      border-radius: 2px;
    }

    .card a { text-decoration: none; }

    .card:hover .cardName,
    .card .cardName:focus {
      color: rgb(30, 200, 10);
    }

    .card:hover {
      box-shadow: inset 0 0 0 2px rgb(30, 200, 10);
    }

    .cardIcon { height: 10rem;}

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
