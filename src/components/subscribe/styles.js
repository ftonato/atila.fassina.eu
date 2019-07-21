import styled from 'styled-components'

const TRON_SHADOW = `0 0 5px var(--radioactive-lime)`
const TRON_BORDER = `2px solid var(--radioactive-lime)`

export const FormWrapper = styled.section`
  background-color: var(--blackest-night);
  color: var(--brightest-day);
`

export const Inner = styled.div`
  margin: 0 auto;
  max-width: 42rem;
`

export const NewsTitle = styled.strong`
  font-weight: 200;
  font-size: 2rem;
  text-shadow: ${TRON_SHADOW};
  display: block;
  padding: 2em 0 1em;
`

export const Form = styled.form`
  position: relative;
  max-width: 42rem;
  margin: 0 auto;
  ::before {
    content: '';
    position: absolute;
    top: 1em;
    left: calc(-100vw + 75%);
    width: 100vw;
    height: 2px;
    box-shadow: ${TRON_SHADOW};
    background-color: var(--radioactive-lime);
    z-index: 1;
  }
`

export const Input = styled.input`
  position: relative;
  font-size: 1.2rem;
  padding: 0.2em 1em;
  margin: 0 0.5em;
  max-width: 15ch;
  color: var(--brightest-day);
  border: ${TRON_BORDER};
  background-color: var(--blackest-night);
  z-index: 2;
`

export const Submit = styled.button`
  position: relative;
  font-size: 1.2rem;
  background-color: var(--blackest-night);
  border: ${TRON_BORDER};
  box-shadow: 0 0 10px var(--radioactive-lime);
  color: var(--radioactive-lime);
  margin-left: 1em;
  padding: 0.2em 1em;
  cursor: pointer;
  transition: all 300ms linear;
  z-index: 2;

  :hover,
  :focus {
    background-color: var(--radioactive-lime);
    box-shadow: ${TRON_SHADOW};
    color: var(--blackest-night);
  }
`
export const List = styled.ul`
  margin-top: 2em;

  li {
    list-style: none;
    margin-top: 0.5em;

    :first-of-type {
      margin-top: 0;
    }

    ::before {
      content: '◭';
      padding-right: 1em;
      text-shadow: ${TRON_SHADOW};
      color: var(--radioactive-lime);
    }
  }
`
