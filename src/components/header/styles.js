import styled from 'styled-components'
export const Top = styled.header`
  display: flex;
  ${({ internal }) =>
    internal
      ? `
      min-height: 0;
      height: 5rem;
      background-color: black;
      justify-content: center;
      align-items: center;
      margin: 0;

      `
      : `
      min-height: 20vh;
      flex-flow: column;
      justify-content: center;
      align-items: center;
`}
`

export const LogoWrap = styled.h1`
  width: ${({ internal }) => (internal ? '7rem' : 'auto')};
  margin: ${({ internal }) => (internal ? '0' : '3rem 0')};
`
