import React from 'react'
import { SocialWrapper, SocialMedias, SocialMediaItem, Icon } from './styles'
import SocialIcons from '../SocialIcons'

export default ({ socialList = [], internal = false }) => (
  <SocialWrapper>
    <SocialMedias>
      {socialList.map(({ name, url }) => (
        <SocialMediaItem key={name}>
          <Icon href={url} target="_blank" title={name}>
            <SocialIcons media={name} color={internal ? '#fff' : '#222'} />
          </Icon>
        </SocialMediaItem>
      ))}
    </SocialMedias>
  </SocialWrapper>
)
