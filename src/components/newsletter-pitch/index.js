import React from 'react'
import { TextWrapper, Subtitle } from './styles'

export default () => (
  <TextWrapper>
    <p>
      <Subtitle>Motivation</Subtitle>
      Share what I've been up to in terms of writing, studying, or future
      projects.
    </p>
    <p>
      <Subtitle>Topics</Subtitle>
      Interesting stuff which we may find happening in the{' '}
      <abbr title="JavaScript">JS</abbr> ecosystem.
    </p>
  </TextWrapper>
)
