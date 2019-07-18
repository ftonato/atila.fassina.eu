import React from 'react'
import { Link } from 'gatsby'
import TextSection from './TextSection'
import avatar from '../../images/front-avatar.jpg'
import styled from 'styled-components'

const TextWrapper = styled.p`
  margin-bottom: 1rem;
  font-size: 1.2em;
  max-width: 42rem;
  line-height: 1.5;

  :last-of-type {
    margin-bottom: 0;
  }
`
const AboutMeLink = styled(Link)`
  position: relative;
  display: inline-block;
  border-bottom: dotted 1px var(--radioactive-lime);
  text-decoration: none;
  color: var(--berliner-sky);

  :hover,
  .aboutMeLink:active {
    border-bottom-style: solid;
  }
`
const Avatar = styled.img`
  width: 95%;
`

const AvatarWrap = styled.div`
  padding: 0 10px;
  max-width: 20%;
  border-bottom: solid 2px var(--radioactive-lime);
  border-top: solid 2px var(--radioactive-lime);
  display: inline-block;
`
const Wrap = styled.aside`
  background-color: black;
  padding: 1rem 0;
`
const InnerWrap = styled.div`
  max-width: 42rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 800px) {
    flex-direction: row;
  }
`

export default () => (
  <Wrap>
    <InnerWrap>
      <AvatarWrap>
        <Avatar src={avatar} alt="Atila's picture" />
      </AvatarWrap>
      <TextSection>
        <TextWrapper>I like writing about all things web.</TextWrapper>
        <TextWrapper>
          You'll find these essays to reflect either what I'm currently
          learning, working, or even some of my personal opinions.
        </TextWrapper>
        <TextWrapper>
          You can check out <AboutMeLink to="/about">who am I</AboutMeLink> at
          any time
        </TextWrapper>
      </TextSection>
    </InnerWrap>
  </Wrap>
)
