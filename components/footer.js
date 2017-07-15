import Link from 'next/link'
import Social from '../components/social'
import {social} from '../config'

export default () => (<div>
  <footer>
    <section className="listsWrap">
      <div className="socialContainer">
        <Social socialList={social} />
      </div>
      <ul className="linkList">
        <li>
          <Link href="https://github.com/atilafassina/atilafassina.github.io">
            <a target="_blank">
              src
            </a>
          </Link>
        </li>

        <li>
          <Link href="https://github.com/atilafassina/atilafassina.github.io/blob/master/LICENSES.md">
            <a target="_blank">
              licenses
            </a>
          </Link>
        </li>
      </ul>
    </section>
    <aside className="footnote">
      <strong className="footTitle">thanks</strong>
      <ul className="powered">
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
    </aside>
  </footer>
  <style jsx>{`
    .listsWrap {
      margin: 5rem auto 0;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      overflow: hidden;
    }

    .logo {
      height: 5rem;
      flex-shrink: .3;
      transform: translateY(2rem);
    }
    .logo img { height: 100%; }

    .socialContainer {
      width: 50%;
      flex-shrink: 2;
      text-align: center;
    }

    .footTitle {
      font-size: .8rem;
    }

    .linkList {
      width: 80%;
      display: flex;
      justify-content: center;
      list-style: none;
      margin-top: 2rem;
    }

    footer li {
      margin: 0 .5rem ;
    }

    footer a {
      font-size: 1.2rem;
      font-weight: 100;
      font-family: monospace;
      color: #bbb;
      text-decoration: none;
      cursor: pointer;
    }

    footer a::before, { content: "_" }

    footer a:hover,
    footer a:focus { text-decoration: underline }

    .footnote {
      margin-top: 5rem;
      font-family: monospace;
      text-align: center;
      font-size: .8rem;
      color: #aaa;
      padding-bottom: .5em;
    }

    .footnote a {
      font-size: .8rem;
      color: #ccc;
    }

    .powered {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      padding-bottom: 1rem;
    }

    .powered li {
      margin: 1em;
    }

    @media (min-width: 860px) {
      .listsWrap {
        width: 90vw;
      }
    }

  `}</style>
</div>)
