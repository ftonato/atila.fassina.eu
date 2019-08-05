import styled from 'styled-components'
import { SMALL_SCREEN } from '../../../settings'

const TRON_SHADOW = `0 0 5px var(--radioactive-lime)`
const TRON_BORDER = `2px solid var(--radioactive-lime)`

export const FormWrapper = styled.section`
  background-color: var(--blackest-night);
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
  text-shadow: ${TRON_SHADOW};
  display: block;
  margin-bottom: 1em;
  background-color: var(--blackest-night);
  z-index: 2;
`

export const Form = styled.form`
  position: relative;
  max-width: 42rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${SMALL_SCREEN} {
    display: block;
  }

  ::before {
    content: '';
    position: absolute;
    top: 1em;
    width: 100vw;
    height: 2px;
    box-shadow: ${TRON_SHADOW};
    background-color: var(--radioactive-lime);
    z-index: 1;
    transform: rotate(90deg);
    left: 0;

    ${SMALL_SCREEN} {
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
  padding: 0.2em 0.5em;
  width: 20ch;
  color: var(--brightest-day);
  border: ${TRON_BORDER};
  background-color: var(--blackest-night);
  box-sizing: border-box;
  margin: 1em 0.5em;

  &:last-of-type {
    margin-bottom: 3em;
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
  color: var(--brightest-day);

  transition: all 250ms linear;
  font-size: ${({ isFormFilled }) => (isFormFilled ? '0.8rem' : '1.2rem')};
  transform: ${({ isFormFilled }) =>
    isFormFilled ? 'translateY(-2em)' : 'none'};

  label:focus-within & {
    font-size: 0.8rem;
    transform: translateY(-2em);
  }
`

export const Input = styled.input`
  font-size: 1.2rem;
  margin: 0;
  width: 100%;
  border: 0;
  outline: 0;
  background: transparent;
  color: white;
  box-sizing: border-box;
`

export const Submit = styled.button`
  position: relative;
  font-size: 1.2rem;
  background-color: var(--blackest-night);
  border: ${TRON_BORDER};
  box-shadow: 0 0 10px var(--radioactive-lime);
  color: var(--radioactive-lime);
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

  ${SMALL_SCREEN} {
    margin-left: 1em;
  }
`
export const List = styled.ul`
  margin-top: 4em;

  ${SMALL_SCREEN} {
    margin-top: 2em;
  }

  li {
    list-style: none;
    margin-top: 0.5em;
    text-align: center;

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
        text-shadow: ${TRON_SHADOW};
        color: var(--radioactive-lime);
      }
    }
  }
`

export const Thankyou = styled.div`
  margin: 4rem 0;
  padding: 2rem 1rem;
  background-color: var(--radioactive-lime);
  box-shadow: 0 0 10px var(--radioactive-lime);
  transform: skew(20deg);
  display: flex;
  justify-content: center;
  align-items: center;

  ::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 100vw;
    height: 2px;
    box-shadow: ${TRON_SHADOW};
    background-color: var(--radioactive-lime);
    z-index: 1;
    transform: rotate(90deg);
    left: 0;

    ${SMALL_SCREEN} {
      transform: none;
      left: calc(-100vw + 90%);
    }
  }

  span {
    color: black;
    display: block;
    font-size: 2.5rem;
    transform: skew(-20deg);
    z-index: 2;
  }
`
