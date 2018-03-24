import Link from 'next/link'

export default ({internal}) => {
  return (
<div>
  <header className={`top ${internal ? 'internal': ''}`}>
    <h1>
      <Link href="/">
        <a>
          <img className="logo" src={`/static/${internal ? 'white-single' : ''}logo.svg`} alt="Atila Fassina"/>
        </a>
      </Link>
    </h1>
  </header>
  <style jsx>{`
    .top {
      min-height: 50vh;
      display: flex; flex-flow: column;
      justify-content: center;
      align-items: center;
    }

    .logo {
      max-width: 90vw;
      height: 15rem;
      margin: 10rem 0;
    }

    .top.internal {
      min-height: 0;
      height: 5rem;
      background-color: black;
      justify-content: center;
      align-items: center;
    }

    .internal .logo {
      height: 3rem;
      margin: 0;
    }

  `}</style>
</div>)}
