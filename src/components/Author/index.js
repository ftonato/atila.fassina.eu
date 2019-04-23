import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import SocialIcon from '../SocialIcons'
import avatar from '../../images/internal-avatar.png'
import { RADIOACTIVE_LIME } from '../../../settings'

const FooterSection = styled.footer`
  background-color: #000;
`

const AuthorWrap = styled.div`
  margin: 0 auto;
  padding: 2rem 0;
  max-width: 42rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
`
const AuthorName = styled.h3`
  display: block;
  width: 100%;
  font-size: 2.5rem;
  line-height: 1;
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  color: #fff;
`
const AuthorPicture = styled.img`
  width: 10rem;
  border-top: solid 2px ${RADIOACTIVE_LIME};
  border-bottom: solid 2px ${RADIOACTIVE_LIME};
`
const InteractionList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 70%;
`
const InteractionItem = styled.li`
  padding-top: 1rem;

  :first-of-type {
    padding-top: 0;
  }
`

const InteractionLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.2rem;

  svg + & {
    margin-left: 1rem;
    position: relative;
    top: -0.5rem;
  }

  :hover,
  :focus {
    border-bottom: dotted 1px ${RADIOACTIVE_LIME};
  }
`

export default ({ next }) => {
  const { path = '', title = '' } = next.frontmatter || {}
  const githubURL = `https://github.com/atilafassina/atila.fassina.eu/edit/master/src/pages/${path.slice(
    1,
    path.length - 1
  )}.md`

  const twitterURL = `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://atila.fassina.eu${path}`
  )}`
  return (
    <FooterSection>
      <AuthorWrap>
        <AuthorName>Atila Fassina</AuthorName>
        <div>
          <AuthorPicture src={avatar} />
        </div>
        <InteractionList>
          <InteractionItem>
            <SocialIcon media="twitter" color="#fff" />
            <InteractionLink
              to={twitterURL}
              target="noopener noreferrer nofollow"
            >
              Discuss this post.
            </InteractionLink>
          </InteractionItem>
          <InteractionItem>
            <SocialIcon media="github" color="#fff" />
            <InteractionLink
              to={githubURL}
              target="noopener noreferrer nofollow"
            >
              Edit this post.
            </InteractionLink>
          </InteractionItem>
          {!!next && (
            <InteractionItem>
              <InteractionLink to={path}>{title} →</InteractionLink>
            </InteractionItem>
          )}
        </InteractionList>
      </AuthorWrap>
    </FooterSection>
  )
}
