import React from 'react'
import Intro from './Intro'
import PostList from './PostList'
// import PostList from '../../../next/components/PostList'
// import PostRequest from '../../../next/components/PostRequest'
// import TextSection from '../../../next/components/TextSection'
import styled from 'styled-components'

const ContentSections = styled.div`
  min-height: 40vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
`

export default ({ posts }) => (
  <ContentSections>
    <Intro />
    <PostList posts={posts} />
    {/* <PostRequest /> */}
  </ContentSections>
)
