import styled from 'styled-components'
import { SMALL_SCREEN } from '../../../settings'

const TRON_SHADOW = color => `0 0 5px ${color}`
const TRON_BORDER = `2px solid currentColor`

export const FormWrapper = styled.section`
  background-color: ${({ internal }) =>
    internal ? 'var(--brigthest-day)' : 'var(--blackest-night)'};
  color: var(--brightest-day);
  overflow: hidden;
`

export const Inner = styled.div`
  margin: 0 auto;
  padding: 3rem 0;
  max-width: 42rem;
`

export const NewsTitle = styled.strong`
  position: relative;
  font-weight: 200;
  font-size: 2rem;
  text-shadow: ${({ internal }) =>
    internal ? 'none' : TRON_SHADOW`var(--radioactive-lime)`};
  display: block;
  margin-bottom: 1em;
  color: ${({ internal }) =>
    internal ? 'var(--blackest-night)' : 'var(--brightest-day)'};
  background-color: ${({ internal }) =>
    internal ? 'var(--brightest-day)' : 'var(--blackest-night)'};
  z-index: 2;
  text-align: center;

  ${SMALL_SCREEN} {
    text-align: left;
  }
`

export const Form = styled.form`
  position: relative;
  max-width: 42rem;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  ${SMALL_SCREEN} {
    flex-direction: row;
  }

  ::before {
    content: '';
    position: absolute;
    color: var(--radioactive-lime);
    top: 1.5em;
    height: 2px;
    box-shadow: ${TRON_SHADOW`var(--radioactive-lime)`};
    background-color: var(--radioactive-lime);
    z-index: 1;
    width: 70vw;
    left: 15vw;
    transform: rotate(90deg);

    ${SMALL_SCREEN} {
      width: 100vw;
      left: 0;
      transform: none;
      left: calc(-100vw + 90%);
    }
  }
`

export const Label = styled.label`
  position: relative;
  display: inline-block;
  font-size: 1.2rem;
  z-index: 2;
  padding: 0.4em 1em;
  width: 30ch;
  color: var(--radioactive-lime);
  border: ${TRON_BORDER};
  background-color: ${({ internal }) =>
    internal ? 'var(--brightest-day)' : 'var(--blackest-night)'};
  box-sizing: border-box;
  margin: 1em 0.5em;

  &:last-of-type {
    margin-bottom: 3em;
  }

  :focus-within {
    border-width: 3px;
  }

  ${SMALL_SCREEN} {
    margin: 0 0.5em;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
export const LabelText = styled.span`
  position: absolute;
  color: ${({ internal }) =>
    internal ? 'var(--blackest-night)' : 'var(--brightest-day)'};

  transition: all 250ms linear;
  font-size: ${({ isFormFilled }) => (isFormFilled ? '0.8rem' : '1.2rem')};
  transform: ${({ isFormFilled }) =>
    isFormFilled ? 'translateY(-2em)' : 'none'};

  label:focus-within & {
    font-size: 1rem;
    transform: translateY(-2em) translateX(-1em);
  }
`

export const Input = styled.input`
  font-size: 1.2rem;
  margin: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ internal }) =>
    internal ? 'var(--blackest-night)' : 'var(--brigthest-day)'};
  box-sizing: border-box;

  :focus {
    outline: none;
  }
`

export const Submit = styled.button`
  position: relative;
  font-size: 1.2rem;
  background-color: ${({ internal }) =>
    internal ? 'var(--brightest-day)' : 'var(--blackest-night)'};
  border: ${({ internal }) =>
    internal ? '2px solid var(--fresh-grass)' : TRON_BORDER};
  box-shadow: 0 0 10px currentColor;
  color: var(--radioactive-lime);
  padding: 0.4em 1em;
  cursor: pointer;
  transition: all 300ms linear;
  z-index: 2;

  &:not([disabled]):hover,
  &:not([disabled]):focus {
    background-color: var(--radioactive-lime);
    box-shadow: ${TRON_SHADOW`var(--radioactive-lime)`};
    color: var(--blackest-night);
  }

  &[disabled] {
    box-shadow: none;
    color: var(--fresh-grass);
    cursor: not-allowed;
  }

  ${SMALL_SCREEN} {
    margin-left: 1em;
  }
`
export const List = styled.ul`
  margin-top: 4em;
  background-color: ${({ internal }) =>
    internal ? 'var(--brigthest-day)' : 'var(--blackest-night)'};
  position: relative;
  z-index: 2;

  ${SMALL_SCREEN} {
    margin-top: 2em;
  }

  li {
    list-style: none;
    margin-top: 0.5em;
    text-align: center;
    color: ${({ internal }) =>
      internal ? 'var(--blackest-night)' : 'var(--brigthest-day)'};

    ${SMALL_SCREEN} {
      text-align: left;
    }

    :first-of-type {
      margin-top: 0;
    }

    ${SMALL_SCREEN} {
      &::before {
        content: '◭';
        padding-right: 1em;
        text-shadow: ${TRON_SHADOW`var(--radioactive-lime)`};
        color: var(--radioactive-lime);
      }
    }
  }
`
