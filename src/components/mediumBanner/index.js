import React from 'react'
import { BannerWrap, BannerText, BannerLink } from './styles'

export default ({ link }) => (
  <BannerWrap>
    <BannerText>
      This post was originally published on{' '}
      <BannerLink
        href={link}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        Medium
      </BannerLink>
    </BannerText>
  </BannerWrap>
)
