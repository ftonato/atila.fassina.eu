import React from 'react'
import Intro from './Intro'
import PostList from './PostList'
import styled from 'styled-components'

const ContentSections = styled.div`
  min-height: 40vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export default ({ posts }) => {
  return (
    <ContentSections>
      <Intro />
      <PostList posts={posts} />
    </ContentSections>
  )
}
