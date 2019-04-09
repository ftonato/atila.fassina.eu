import React from 'react'
import { Link } from 'gatsby'
import { Top, Logo } from './styles'
import logo from '../../images/logo.svg'

export default ({ data, internal = false }) => (
  <Top internal={internal}>
    <h1>
      <Link to="/">
        <Logo src={logo} internal={internal} alt="Atila Fassina" />
      </Link>
    </h1>
  </Top>
)
