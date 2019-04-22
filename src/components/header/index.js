import React from 'react'
import { Link } from 'gatsby'
import Logo from '../Logo'
import { Top, LogoWrap } from './styles'

export default ({ data, internal = false }) => (
  <Top internal={internal}>
    <LogoWrap internal={internal}>
      <Link to="/">
        <Logo color={internal ? '#fff' : '#000'} />
      </Link>
    </LogoWrap>
  </Top>
)
