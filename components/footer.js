import Link from 'next/link'

export default () => (<div>
  <footer>
    <section className="listsWrap">
    <ul className="linkList">
      <strong className="footTitle">
        links
      </strong>
      <li>
        <Link href="https://github.com/atilafassina/atilafassina.github.io">
          <a target="_blank">
            src
          </a>
        </Link>
      </li>

      <li>
        <Link href="https://github.com/atilafassina/atilafassina.github.io">
          <a target="_blank">
            licenses
          </a>
        </Link>
      </li>
    </ul>
    <ul className="powered">
      <strong className="footTitle">thanks</strong>
      <li>
        <Link href="https://zeit.co/next">
          <a target="_blank">
            nextjs
          </a>
        </Link>
      </li>

      <li>
        <Link href="https://github.com">
          <a target="_blank">
            github
          </a>
        </Link>
      </li>

      <li>
        <Link href="https://surge.sh/">
          <a target="_blank">
            surge.sh
          </a>
        </Link>
      </li>

      <li>
        <Link href="https://www.cloudflare.com">
          <a target="_blank">
            cloudfare
          </a>
        </Link>
      </li>

      <li>
        <Link href="https://thenounproject.com/">
          <a target="_blank">
            thenounproject
          </a>
        </Link>
      </li>
    </ul>
  </section>
  <aside className="footnote">
    <small>
      no tracking, no cookies, no catches
    </small>
  </aside>
</footer>
  <style jsx>{`
    .listsWrap {
      margin: 3rem auto 0;
      overflow: hidden
    }

    .footTitle {
      font-size: .8rem;
    }

    .linkList {
      list-style: none;
      float: left;
      margin: 2rem 0 3rem 5rem;
    }

    .powered {
      list-style: none;
      float: right;
      margin: 2rem 5rem 3rem 0;
    }

    footer li {
      margin: .5rem 0;
    }

    footer a {
      font-size: 1rem;
      font-weight: 100;
      font-family: monospace;
      color: #666;
      text-decoration: none;
      cursor: pointer;
    }

    footer a::before, {
      content: "_"
    }

    footer a:hover,
    footer a:focus { text-decoration: underline }

    .footnote {
      font-family: monospace;
      text-align: center;
      font-size: .8rem;
      color: #aaa;
      padding-bottom: .5em;
    }

    @media (min-width: 860px) {
      .listsWrap {
        width: 90vw;
      }
    }

  `}</style>
</div>)
