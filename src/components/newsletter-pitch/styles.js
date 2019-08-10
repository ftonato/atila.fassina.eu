import styled from 'styled-components'
import { SMALL_SCREEN } from '../../../settings'

export const TextWrapper = styled.article`
  margin: 2rem auto;
  max-width: 50rem;
  font-size: 1.8rem;
  line-height: 1.8;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    max-width: 90%;
  }

  ${SMALL_SCREEN} {
    flex-direction: row;
    justify-content: space-between;

    p {
      max-width: 45%;
    }
  }
`
export const Subtitle = styled.strong`
  display: block;
  color: var(--fresh-grass);
  text-shadow: 0 0 5px var(--radioactive-lime);
`
