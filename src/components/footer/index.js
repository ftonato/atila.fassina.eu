import React from 'react'
import Social from '../social'
import { social } from '../../../settings'
import {
  ListWrap,
  LinkList,
  SocialContainer,
  LinkItem,
  Powered,
  PoweredItem,
  FooterLink,
  Footnote,
  Footer,
  FootTitle
} from './styles'

export default ({ internal = false }) => (
  <Footer internal={internal}>
    <ListWrap>
      <SocialContainer>
        <Social socialList={social} internal={internal} />
      </SocialContainer>
      <LinkList>
        <LinkItem>
          <FooterLink
            href="https://github.com/atilafassina/atila.fassina.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            src
          </FooterLink>
        </LinkItem>

        <LinkItem>
          <FooterLink
            href="https://github.com/atilafassina/atila.fassina.eu/blob/master/LICENSES.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            licenses
          </FooterLink>
        </LinkItem>
        <LinkItem>
          <FooterLink internal={internal} href="/rss.xml">
            rss
          </FooterLink>
        </LinkItem>
      </LinkList>
    </ListWrap>
    <Footnote>
      <FootTitle>thanks</FootTitle>
      <Powered>
        <PoweredItem>
          <FooterLink
            footnote
            href="https://gatsbyjs.org"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            gatsby
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink
            footnote
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            github
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink
            footnote
            href="https://www.netlify.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            netlify
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink
            footnote
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            cloudfare
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink
            footnote
            href="https://thenounproject.com/"
            target="_blank"
            rel="noopener noreferrer nofollow"
          >
            thenounproject
          </FooterLink>
        </PoweredItem>
      </Powered>
    </Footnote>
  </Footer>
)
