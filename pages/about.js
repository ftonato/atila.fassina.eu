import Link from 'next/link'
import Page from '../layouts/page'
import Header from '../components/header'
import Footer from '../components/footer'
import { colors } from '../config'

const about = props => (
  <Page>
    <Header internal />
    <article className="wrap">
      <div className="header">
        <h2 className="greetings">👋 I'm Atila.</h2>
        <img
          className="avatar"
          src="https://pbs.twimg.com/profile_images/783062449822035968/h8q0Y5F6_400x400.jpg"
          alt="Picture of Atila"
        />
      </div>

      <p>
        A Web Developer, as in: I love coding Javascript and NodeJS, I'm very
        passionate about performance (specially, but not restricted to,
        client-side), <abbr title="accessibility">A11Y</abbr> is a paramount
        responsability and good <abbr title="user experience">UX</abbr> is
        always my target.
      </p>

      <strong>I'm also:</strong>
      <p>
        {new Date().getFullYear() - 1986} years old. Husband. Father of 2. Nerd.
        Brazilian born and raised. Italian by heritage. Berliner from choice.
      </p>

      <strong>and very lucky:</strong>

      <p>
        fortunate enough to work with some extremely talented people at the Web
        Team of{' '}
        <Link href="https://next.n26.com/en-eu">
          <a target="_blank">N26</a>
        </Link>, building a bank the world loves to use.
      </p>

      <strong>fun facts</strong>

      <ul>
        <li>I have a bachelor in Physical Education. 💪</li>
        <li>
          I've swum more than 60Km at open waters in official competitions 🏊‍
        </li>
        <li>
          I like dad jokes and <strike>stupid</strike> puns. 🧐
        </li>
        <li>I don't drink coffee. But I compensate with mate. 🔥</li>
      </ul>
    </article>
    <Footer internal />
    <style jsx>{`
      .wrap {
        margin: 0 auto;
        max-width: 80ex;
        padding: 0 2ex;
      }

      .header {
        margin: 15ex 0 10ex;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .avatar {
        max-width: 200px;
        object-fit: contain;
        border-radius: 5px;
      }

      .greetings {
        font-size: 2em;
        margin: 5ex 0 2ex;
      }

      p {
        font-size: 1.2em;
        line-height: 1.5;
      }

      strong {
        display: block;
        font-size: 1.5em;
        margin-top: 3ex;
        color: ${colors.BRUSHED_STEEL};
      }

      strong::before {
        content: '!';
        padding: 0 1ex 0 2ex;
        font-weight: 800;
      }

      ul {
        list-style: none;
        margin: 3ex 0 10ex;
      }

      li::before {
        content: '→';
        color: ${colors.BRUSHED_STEEL};
        font-weight: 800;
        padding-right: 1ex;
      }

      li:not(:last-of-type) {
        margin-bottom: 2ex;
      }

      a {
        position: relative;
        display: inline-block;
        border-bottom: dotted 1px ${colors.FRESH_GRASS};
        text-decoration: none;
        color: ${colors.BRUSHED_STEEL};
      }

      a:hover,
      a:active {
        border-bottom-style: solid;
      }
    `}</style>
  </Page>
)

export default about
