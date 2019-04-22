import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FRESH_GRASS, DONKEY_FUR } from '../../../settings'

const List = styled.ul`
  max-width: 42rem;
  margin: 5rem auto;
  list-style: none;
`

const Post = styled.li`
  margin-bottom: 5rem;
  :hover a {
    color: ${FRESH_GRASS};
  }
`

const PostTitle = styled(Link)`
  display: block;
  margin-bottom: 1rem;
  font-size: 3rem;
  text-decoration: none;
  color: black;
`
const PostData = styled.small`
  font-size: 0.8rem;
  color: rgb(70, 70, 70);
`

const Excerpt = styled.section`
  margin-top: 0.8rem;
  font-size: 1.2rem;
  color: ${DONKEY_FUR};
`

export default ({ posts }) => (
  <List>
    {posts.map(({ node }) => (
      <Post key={node.id}>
        {console.log(node)}
        <PostTitle to={node.frontmatter.path}>
          {node.frontmatter.title}
        </PostTitle>
        <PostData>
          {node.frontmatter.date} | {node.fields.readingTime.text} (
          {node.fields.readingTime.words} words)
        </PostData>
        <Excerpt>{node.frontmatter.excerpt}</Excerpt>
      </Post>
    ))}
  </List>
)
