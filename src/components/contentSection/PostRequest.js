import React from 'react'
import TextSection from './TextSection'
import { Link } from 'gatsby'
import { RADIOACTIVE_LIME } from '../../../settings'
import styled from 'styled-components'

const ButtonList = styled.ul`
  width: 100%;
  margin: 10ch 0;
  list-style: none;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  li {
    margin-top: 3ex;
  }
  li:first-of-type {
    margin-top: 0;
  }

  @media (min-width: 650px) {
    flex-direction: row;

    li {
      margin-left: 5em;
      margin-top: 0;
    }
    li:first-of-type {
      margin-left: 0;
    }
  }
`

const ShareButton = styled(Link)`
  padding: 2ch 3ch;
  background-color: white;
  color: black;
  text-decoration: none;
  cursor: pointer;
  display: block;
  font-size: 1.2em;
  border-top: 3px solid transparent;
  border-bottom: 3px solid transparent;

  :hover,
  :active {
    border-top-color: ${RADIOACTIVE_LIME};
    border-bottom-color: ${RADIOACTIVE_LIME};
  }
`
const Wrap = styled.aside`
  background-color: black;
`
const WrapInner = styled.div`
  max-width: 42rem;
  margin: 0 auto;
`

export default () => (
  <Wrap>
    <WrapInner>
      <TextSection title="Post requests">
        <h2>Request a post</h2>
        <ButtonList>
          <li>
            <ShareButton
              href="https://github.com/atilafassina/atila.fassina.eu/issues/new?labels=post-request"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              Open an issue
            </ShareButton>
          </li>
          <li>
            <ShareButton
              href="https://twitter.com/intent/tweet?hashtags=PostRequest&text=@atilafassina ✎"
              target="_blank"
              rel="nopener no referrer no follow"
            >
              Drop me a line
            </ShareButton>
          </li>
        </ButtonList>
      </TextSection>
    </WrapInner>
  </Wrap>
)
