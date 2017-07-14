export default () => (<div>
  <header className="top">
    <h1>
      <img className="logo" src="/static/logo.svg" alt="Atila Fassina"/>
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
      height: 15rem;
      margin: 10rem 0;
    }
  `}</style>
</div>)
