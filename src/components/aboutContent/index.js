import React from 'react'
import {
  Wrap,
  FunFactsList,
  FunFact,
  Greetings,
  Avatar,
  TextLink,
  ParagraphWrap,
  Subtitle,
  SalutationHeader
} from './styles'
export default () => (
  <Wrap>
    <SalutationHeader>
      <Greetings>
        <span role="img" aria-label="waving">
          👋
        </span>{' '}
        I'm Atila.
      </Greetings>
      <Avatar
        src="https://pbs.twimg.com/profile_images/783062449822035968/h8q0Y5F6_400x400.jpg"
        alt="Picture of Atila"
      />
    </SalutationHeader>

    <ParagraphWrap>
      A Brazilian/Italian Web developer living in beautiful Auckland, New
      Zealand.
    </ParagraphWrap>
    <ParagraphWrap>
      I'm very passionate about delivering good overall UX through fast and
      accessible code, in order to keep myself updated and to push the web
      forward I do my best to engage with the open-source community, either as a
      writer, speaker or coder.
    </ParagraphWrap>
    <ParagraphWrap>
      A Web Developer, as in: I love coding Javascript and NodeJS, I'm very
      passionate about performance (specially, but not restricted to,
      client-side), <abbr title="accessibility">A11Y</abbr> is a paramount
      responsability and good <abbr title="user experience">UX</abbr> is always
      my target.
    </ParagraphWrap>

    <Subtitle>I'm also:</Subtitle>
    <ParagraphWrap>
      {new Date().getFullYear() - 1987} years old. Husband. Father of 2. Nerd.
      Brazilian born and raised. Italian from heritage. Kiwi by choice.
    </ParagraphWrap>

    <Subtitle>and very lucky:</Subtitle>

    <ParagraphWrap>
      working at beautiful Auckland with a bunch of the nicest smart people I
      have met at{' '}
      <TextLink
        href="https://pushpay.com"
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        Pushpay
      </TextLink>
      , spreading some generosity all around.
    </ParagraphWrap>

    <strong>fun facts</strong>

    <FunFactsList>
      <FunFact>
        I have a bachelor in Physical Education.{' '}
        <span role="img" aria-label="flexing arm">
          💪
        </span>
      </FunFact>
      <FunFact>
        I've swum more than 60Km at open waters in official competitions{' '}
        <span role="img" aria-label="man swimming">
          🏊‍
        </span>
      </FunFact>
      <FunFact>
        I like dad jokes and <strike>stupid</strike> puns.{' '}
        <span role="img" aria-label="smile with monocle">
          🧐
        </span>
      </FunFact>
      <FunFact>
        I don't drink coffee. But I compensate with mate.{' '}
        <span role="img" aria-label="fire">
          🔥
        </span>
      </FunFact>
    </FunFactsList>
  </Wrap>
)