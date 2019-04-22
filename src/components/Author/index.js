import React from 'react'
import styled from 'styled-components'
import SocialIcon from '../SocialIcons'
import avatar from '../../images/internal-avatar.png'
import { FRESH_GRASS } from '../../../settings'

const AuthorWrap = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AuthorName = styled.h3`
  font-size: 2.5rem;
`
const AuthorPicture = styled.img`
  width: 10rem;
  border-top: solid 2px #000;
  border-bottom: solid 2px #000;
`
const SocialList = styled.ul``
const SocialItem = styled.li``

export default () => (
  <AuthorWrap>
    <div>
      <AuthorName>Atila Fassina</AuthorName>
      <AuthorPicture src={avatar} />
    </div>
    <SocialList>
      <SocialItem>
        <SocialIcon media="twitter" color="#000" />
      </SocialItem>
    </SocialList>
  </AuthorWrap>
)
