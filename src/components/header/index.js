import { Link } from 'gatsby'
import React from 'react'
import { Top } from './styles'
import logo from '../../images/logo.svg'

// className={`top ${internal ? 'internal' : ''}`

export default ({ internal = false }) => (
  <Top>
    <h1>
      <Link to="/">
        <img src={logo} alt="Atila Fassina" />
      </Link>
    </h1>
  </Top>
)
