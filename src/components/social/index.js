import React from 'react'
import { SocialWrapper, SocialMedias, SocialMediaItem, Icon } from './styles'
import twitter from '../../images/twitter.svg'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'

const socialNetworks = {
  twitter,
  github,
  linkedin
}

//`/static/${name}${internal ? '-white' : ''}.svg`
export default ({ socialList = [], internal = false }) => (
  <SocialWrapper>
    <SocialMedias>
      {socialList.map(({ name, url }) => (
        <SocialMediaItem key={name}>
          <Icon href={url} target="_blank" title={name}>
            <img
              className={`${name} icon`}
              src={socialNetworks[name]}
              alt={name}
            />
          </Icon>
        </SocialMediaItem>
      ))}
    </SocialMedias>
  </SocialWrapper>
)
