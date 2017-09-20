import Link from 'next/link'

export default ({socialList = [], internal = false}) => (<div className="socialWrapper">
  <ul className="socialMedias">
    {socialList.map( ({name, url}) => (
      <li key={name} className={`socialIcon ${internal && 'internal'}`}>
        <Link href={url}>
          <a className={name} target="_blank" title={name}>
            {name !== 'email' && <img className={`${name} icon`} src={`/static/${name}${internal ? '-white':''}.svg`} alt={name}/>}
            {name === 'email' && <span className={`${name} icon`}>@</span>}
          </a>
        </Link>
      </li>
    ))}
  </ul>
  <style jsx>{`
    .socialWrapper {
      width: 50%;
      margin: 0 auto;
    }
    .socialMedias {
      margin: 0 auto;
      list-style: none;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
    }

    .socialIcon {
      height: 1.5rem;
      font-size: 1.5rem;
      margin: .5em;
    }

    .icon { height: 100%; font-size: inherit; }

    .medium { width: 2rem; }

    .email {
      position: relative;
      top: -2px;
      color: #222;
      line-height: 1;
      font-weight: 800;
      text-decoration: none !important;
    }

    .internal .email {color: white}
  `}</style>
</div>)
