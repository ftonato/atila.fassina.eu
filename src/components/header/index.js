import { Link } from 'gatsby'
import React from 'react'
import { Top, Logo } from './styles'
import logo from '../../images/logo.svg'

// className={`top ${internal ? 'internal' : ''}`

export default ({ internal = false }) => (
  <Top internal={internal}>
    <h1>
      <Link to="/">
        <Logo src={logo} internal={internal} alt="Atila Fassina" />
      </Link>
    </h1>
  </Top>
)
