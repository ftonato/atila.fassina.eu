import Link from 'next/link'

export default ({socialList = []}) => (<div className="socialWrapper">
  <ul className="socialMedias">
    {socialList.map( ({name, url}) => (
      <li key={name} className="socialIcon">
        <Link href={url}>
          <a className={name} target="_blank" title={name}>
            {name !== 'email' && <img className={`${name} icon`} src={`/static/${name}.svg`} alt={name}/>}
            {name === 'email' && <span className={`${name} icon`}>@</span>}
          </a>
        </Link>
      </li>
    ))}
  </ul>
  <style jsx>{`
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
      color: #222;
      line-height: 1;
      font-weight: 500;
      text-decoration: none !important;
    }
  `}</style>
</div>)
