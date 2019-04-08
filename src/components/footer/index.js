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
            href="https://github.com/atilafassina/atilafassina.github.io"
            target="_blank"
          >
            src
          </FooterLink>
        </LinkItem>

        <LinkItem>
          <FooterLink
            href="https://github.com/atilafassina/atilafassina.github.io/blob/master/LICENSES.md"
            target="_blank"
          >
            licenses
          </FooterLink>
        </LinkItem>
      </LinkList>
    </ListWrap>
    <Footnote>
      <FootTitle>thanks</FootTitle>
      <Powered>
        <PoweredItem>
          <FooterLink footnote href="https://gatsbyjs.org" target="_blank">
            gatsby
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink footnote href="https://github.com" target="_blank">
            github
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink footnote href="https://www.netlify.com" target="_blank">
            netlify
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink
            footnote
            href="https://www.cloudflare.com"
            target="_blank"
          >
            cloudfare
          </FooterLink>
        </PoweredItem>

        <PoweredItem>
          <FooterLink
            footnote
            href="https://thenounproject.com/"
            target="_blank"
          >
            thenounproject
          </FooterLink>
        </PoweredItem>
      </Powered>
    </Footnote>
  </Footer>
)
