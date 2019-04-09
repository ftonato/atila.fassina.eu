import React from 'react'
import { Link } from 'gatsby'
import TextSection from './TextSection'
import { BERLINER_SKY, RADIOACTIVE_LIME } from '../../../settings'
import styled from 'styled-components'

const TextWrapper = styled.p`
  margin: 0 auto 3ch;
  font-size: 1.2em;
  max-width: 70ch;
  line-height: 1.5;
`
const AboutMeLink = styled(Link)`
  position: relative;
  display: inline-block;
  border-bottom: dotted 1px ${RADIOACTIVE_LIME};
  text-decoration: none;
  color: ${BERLINER_SKY};

  :hover,
  .aboutMeLink:active {
    border-bottom-style: solid;
  }
`

export default () => (
  <TextSection title="About me">
    <TextWrapper>
      A Brazilian/Italian Web developer living in the beautiful city of
      Auckland, New Zealand.
    </TextWrapper>
    <TextWrapper>
      I'm very passionate about delivering good overall UX through fast and
      accessible code, in order to keep myself updated and to push the web
      forward I do my best to engage with the open-source community, either as a
      writer, speaker or coder.
    </TextWrapper>
    <TextWrapper>
      You'll find here a hub of all means I share my works, ways of contacting
      me, or even to read more about{' '}
      <AboutMeLink to="/about">who I am</AboutMeLink>.
    </TextWrapper>
  </TextSection>
)
