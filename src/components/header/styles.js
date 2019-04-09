import styled from 'styled-components'

export const Top = styled.header`
  ${({ internal }) =>
    internal
      ? `
      min-height: 0;
      height: 5rem;
      background-color: black;
      justify-content: center;
      align-items: center;

      `
      : `
      min-height: 50vh;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
`}
`

export const Logo = styled.img`
  height: ${({ internal }) => (internal ? '3rem' : '15rem')};
  max-width: '90vw';
  margin: ${({ internal }) => (internal ? '0' : '10rem 0')};
`
