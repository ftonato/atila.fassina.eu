import styled from 'styled-components'

export const BannerWrap = styled.aside`
  margin: 3.5em 0;
  display: inline-block;
  min-height: 2em;
  line-height: 1.2;
  position: relative;
  display: flex;
  align-items: center;
  color: var(--donkey-fur);

  ::before {
    content: '';
    position: absolute;
    display: block;
    height: 160%;
    width: 100%;
    background: var(--cold-fog);
    border: solid 5px var(--berliner-sky);
    transform: skew(10deg, -2deg);
`
export const BannerText = styled.span`
  z-index: 2;
  padding-top: 1em;
  padding-left: 2em;
`

export const BannerLink = styled.a`
  text-decoration: none;
  color: var(--donkey-fur);
  font-weight: 600;
`
