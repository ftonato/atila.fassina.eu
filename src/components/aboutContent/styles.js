import styled from 'styled-components'

export const Wrap = styled.article`
  margin: 0 auto;
  max-width: 42rem;
  padding: 0 2ex;
`

export const SalutationHeader = styled.div`
  margin: 15ex 0 10ex;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Avatar = styled.img`
  max-width: 200px;
  object-fit: contain;
  border-radius: 5px;
`

export const Greetings = styled.h2`
  font-size: 2em;
  margin: 5ex 0 2ex;
`

export const ParagraphWrap = styled.p`
  font-size: 1.2em;
  line-height: 1.5;
`

export const Subtitle = styled.strong`
  display: block;
  font-size: 1.5em;
  margin-top: 3ex;
  color: var(--brushed-steel);

  ::before {
    content: '!';
    padding: 0 1ex 0 2ex;
    font-weight: 800;
  }
`

export const FunFactsList = styled.ul`
  list-style: none;
  margin: 3ex 0 10ex;
`

export const FunFact = styled.li`
  ::before {
    content: '→';
    color: var(--brushed-steel);
    font-weight: 800;
    padding-right: 1ex;

    :not(:last-of-type) {
      margin-bottom: 2ex;
    }
  }
`

export const TextLink = styled.a`
  position: relative;
  display: inline-block;
  border-bottom: dotted 1px var(--fresh-grass);
  text-decoration: none;
  color: var(--brushed-steel);

  :hover,
  :active {
    border-bottom-style: solid;
  }
`
