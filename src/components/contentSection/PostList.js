import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

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
  width: ${({ sprint }) => (sprint ? '40% ' : '100%')};
  margin-bottom: 5rem;
  :hover a {
    color: var(--fresh-grass);
  }
`

const PostTitle = styled(Link)`
  display: block;
  margin-bottom: 0.5rem;
  font-size: ${({ sprint }) => (sprint ? '0.8rem' : '1.5rem')};
  text-decoration: none;
  color: black;
  transition: all 300ms linear;

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
        <Pitch>{node.frontmatter.pitch}</Pitch>
        <PostData>
          {node.frontmatter.date}{' '}
          {!node.frontmatter.sprint && (
            <span>
              | {node.fields.readingTime.text} ({node.fields.readingTime.words}{' '}
              words )
            </span>
          )}
        </PostData>
      </Post>
    ))}
  </List>
)
