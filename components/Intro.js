import TextSection from './TextSection'
import { colors } from '../config'

export default () => (
  <TextSection title="About me">
    <p className="textWrapper">
      A Brazilian/Italian Web developer who calls Berlin his home since late
      2014.
    </p>
    <p className="textWrapper">
      I'm very passionate about delivering good overall UX through fast and
      accessible code, in order to keep myself updated and to push the web
      forward I do my best to engage with the open-source community, either as a
      writer, speaker or coder.
    </p>
    <p className="textWrapper">
      You'll find here a hub of all means I share my works, ways of contacting
      me, or even to read more about{' '}
      <a className="aboutMeLink" href="/about">
        who I am
      </a>
      .
    </p>
    <style jsx>{`
      .textWrapper {
        margin: 0 auto 3ch;
        font-size: 1.2em;
        max-width: 70ch;
        line-height: 1.5;
      }

      .aboutMeLink {
        position: relative;
        display: inline-block;
        border-bottom: dotted 1px ${colors.RADIOACTIVE_LIME};
        text-decoration: none;
        color: ${colors.BERLINER_SKY};
      }

      .aboutMeLink:hover,
      .aboutMeLink:active {
        border-bottom-style: solid;
      }
    `}</style>
  </TextSection>
)
