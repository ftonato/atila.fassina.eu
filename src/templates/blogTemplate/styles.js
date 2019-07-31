import styled from 'styled-components'

export const TitleWrap = styled.header`
  margin-bottom: 5rem;
`

export const MainTitle = styled.h1`
  font-size: 4rem;
  margin-top: 1.5em;
  line-height: 1.2;
`
export const Pitch = styled.strong`
  display: block;
  margin-bottom: 1.5em;
  line-height: 1.2;
  color: var(--brushed-steel);
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
h1, h2, h3, h4, h5, h6 {
  margin: 3em auto 1em;

  a {
    border: none;

    :hover {
      border: none;
    }
  }
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
  color: var(--brushed-steel);
  border-bottom: dotted 2px var(--fluorescent_pine);

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
    position: relative;
    top: 0.2em;
    content: '－  ';
    color: var(--fluorescent_pine);
    font-size: 1.5rem;
    line-height: 1;
  }
}
`

const quotes = `
  blockquote {
    color: rgb(100, 100, 100);
    font-style: italic;
    padding-left: 0.8em;
    border-left: 2px solid var(--radioactive-lime);
  }

  blockquote span {
    font-style: normal;
    color: var(--donkey-fur);

    a {
      color: var(--donkey-fur);
    }

    ::before {
      content: " --";
    }
  }
`

const lines = `
  hr {
    position: relative;
    margin: 4rem auto;
    background-color: transparent;
    border:none;
    border-bottom: solid 1px var(--radioactive-lime);
    width: 3rem;

    ::after {
      content: "▲";
      font-size: 2rem;
      color: var(--donkey-fur);
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      transform: translateX(-50%) translateY(-50%);
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
  ${quotes}
  ${lines}
`
