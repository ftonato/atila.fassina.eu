import { BRUSHED_STEEL, RADIOACTIVE_LIME } from '../../../settings'
import styled from 'styled-components'

export const TitleWrap = styled.header`
  margin-bottom: 5rem;
`

export const MainTitle = styled.h1`
  font-size: 2.5rem;
  margin-top: 3em;
  line-height: 1;
`
export const PostDate = styled.small`
  font-family: monospace;
  font-size: 1.2rem;
`

export const PostWrap = styled.main`
  margin: 0 auto;
  max-width: 95%;
  /* Number of caracters per line */
  width: 40em;
  font-size: 1.2rem;
`
const headlines = `
h3, h4, h5, h6 {
  margin: 1.5em auto 0.5em;

  a {
    border: none;

    :hover {
      border: none;
    }
  }
}

h1, h2 {
  margin: 3em auto 1em;
}
`
const p = `
p {
  margin-bottom: 1.5em;
  line-height: 1.5;
}
`
const a = `
a {
  text-decoration: none;
  color: ${BRUSHED_STEEL};
  border-bottom: dotted 2px ${RADIOACTIVE_LIME};

  :hover,
  :focus {
    border-bottom-style: solid;
  }
}
`

const img = `
img {
  width: 150%;
  margin: 3em 0 3em -25%;

  ::after {
    content: 'foo'
  }
}
`
const li = `
li {
  margin-bottom: 1.2em;
  list-style: none;

  p {
    display: inline;
  }

  ::before {
    content: '－  ';
    color: ${RADIOACTIVE_LIME};
    font-size: 1.5rem;
    line-height: 1;
  }
}
`
const textTransforms = `
strong { font-weight: 600; }
i { font-style: italic; }
`

export const Post = styled.article`
  ${headlines}
  ${p}
  ${a}
  ${img}
  ${li}
  ${textTransforms}
`
