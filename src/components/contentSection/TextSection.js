import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 70%;
  color: white;
  display: flex;
  flex-flow: column;
  align-items: center;
`
const TextWrapper = styled.div`
  width: 100%;
`

export default props => (
  <Wrapper>
    <TextWrapper>{props.children}</TextWrapper>
  </Wrapper>
)
