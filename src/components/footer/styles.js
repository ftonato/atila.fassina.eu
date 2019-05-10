import styled from 'styled-components'
import { FRESH_GRASS } from '../../../settings'

export const Footer = styled.footer`
  border-top: ${({ internal }) => (internal ? 'none' : 'solid 3rem black')};
  background: ${({ internal }) => (internal ? 'black' : 'white')};
`

export const ListWrap = styled.section`
  padding-top: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`

export const SocialContainer = styled.div`
  width: 100%;
  flex-shrink: 2;
  text-align: center;
`

export const FootTitle = styled.strong`
  font-size: 0.8rem;
`

export const LinkList = styled.ul`
  width: 80%;
  display: flex;
  justify-content: center;
  list-style: none;
  margin-top: 2rem;
`

export const LinkItem = styled.li`
  margin: 0 0.5rem;
`

export const FooterLink = styled.a`
  font-size: ${({ footnote }) => (footnote ? '0.8rem' : '1.2rem')};
  font-weight: 100;
  font-family: monospace;
  color: ${({ footnote }) =>
    footnote ? 'rgb(115, 115, 115)' : 'rgb(118, 118, 118)'};
  text-decoration: none;
  cursor: pointer;

  ::before {
    content: '_';
  }

  :hover,
  :focus {
    text-decoration: underline;
  }

  &[href$='rss.xml'] {
    text-shadow: rgba(0, 0, 0, 0.4) 0 3px 5px 2px;
    position: relative;
    color: ${FRESH_GRASS};
  }
`
export const Footnote = styled.aside`
  margin-top: 5rem;
  font-family: monospace;
  text-align: center;
  font-size: 0.8rem;
  color: rgb(118, 118, 118);
  padding-bottom: 0.5em;
`

export const Powered = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 1rem;
`

export const PoweredItem = styled.li`
  margin: 1em;
`
