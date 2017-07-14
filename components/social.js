import Link from 'next/link'

export default ({socialList = []}) => (<div className="socialWrapper">
  <ul className="socialMedias">
    {socialList.map( ({name, url}) => (
      <li key={name} className="socialIcon">
        <Link href={url}>
          <a className={name} target="_blank" title={name}>
            {name !== 'email' && <img className={name} src={`/static/${name}.svg`} alt={name}/>}
            {name === 'email' && <span className="emailIcon">@</span>}
          </a>
        </Link>
      </li>
    ))}
  </ul>
  <style jsx>{`
    .socialWrapper {
      background-color: #bbb;
    }
    .socialMedias {
      width: 80%;
      margin: 0 auto;
      padding: .5em 0;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }

    .socialIcon {
      height: 2rem;
    }

     .medium {width: 2rem;}

    .email {
      font-size: 2rem;
      color: #222;
      line-height: 1;
      font-weight: 500;
    }
      text-decoration: none !important;
  `}</style>
</div>)
