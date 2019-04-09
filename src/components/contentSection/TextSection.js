import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  padding: 5em 0;
  color: white;
  background-color: black;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
`
const SectionTitle = styled.h2`
  font-size: 3em;
`
const TextWrapper = styled.div`
  width: 100%;
`

export default props => (
  <Wrapper>
    <SectionTitle>{props.title}</SectionTitle>
    <TextWrapper>{props.children}</TextWrapper>
  </Wrapper>
)
