import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  max-width: 42rem;
  margin: 5rem auto 1rem;
  list-style: none;
  padding: 0 2rem;
  transition: all 300ms linear;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (min-width: 800px) {
    padding: 0;
  }
`

const Post = styled.li`
  width: 100%;
  margin-bottom: 5rem;
  position: relative;

  :hover a {
    color: var(--fresh-grass);
  }

  @media (min-width: 800px) {
    width: ${({ sprint }) => (sprint ? '50% ' : '100%')};
  }

  ${({ sprint }) =>
    sprint &&
    `::before {
    content: '';
    position: absolute;
    top: -1em;
    left: -1em;
    display: block;
    width: 2px;
    height: calc(100% + 2em);
    background-color: var(--radioactive-lime);
  }
  `}
`

const PostTitle = styled(Link)`
  position: relative;
  display: block;
  margin-bottom: 0.5rem;
  font-size: 2rem;
  text-decoration: none;
  color: black;
  transition: all 300ms linear;

  ${({ sprint }) =>
    !sprint &&
    `::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: -50vw;
      width: calc(50vw + 50%);
      height: 2px;
      background-color: var(--radioactive-lime);
      opacity: 0.7;
    }`}

  @media (min-width: 800px) {
    font-size: ${({ sprint }) => (sprint ? '2rem' : '3rem')};
  }
`
const PostData = styled.small`
  display: block;
  font-size: 0.8rem;
  margin-top: 1rem;
  color: rgb(70, 70, 70);
`

const Pitch = styled.section`
  font-size: 1.2rem;
  color: var(--donkey-fur);
`

export default ({ posts }) => (
  <List>
    {posts.map(({ node }) => (
      <Post key={node.id} sprint={node.frontmatter.sprint}>
        <PostTitle to={node.frontmatter.path} sprint={node.frontmatter.sprint}>
          {node.frontmatter.title}
        </PostTitle>
        {!node.frontmatter.sprint && <Pitch>{node.frontmatter.pitch}</Pitch>}
        <PostData>
          {node.frontmatter.date} | {node.fields.readingTime.text} (
          {node.fields.readingTime.words} words)
        </PostData>
      </Post>
    ))}
  </List>
)
