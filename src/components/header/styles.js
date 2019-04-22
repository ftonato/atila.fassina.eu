import styled from 'styled-components'

export const Top = styled.header`
  display: flex;
  ${({ internal }) =>
    internal
      ? `
      min-height: 0;
      height: 5rem;
      background-color: whitesmoke;
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

export const Logo = styled.img`
  height: ${({ internal }) => (internal ? '3rem' : '10rem')};
  max-width: '90vw';
  margin: ${({ internal }) => (internal ? '0' : '3rem 0')};
`
