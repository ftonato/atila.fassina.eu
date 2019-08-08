import React, { useState } from 'react'
import {
  Form,
  FormWrapper,
  Submit,
  Inner,
  NewsTitle,
  Label,
  LabelText,
  Input,
  List
} from './styles'

// eslint-disable-next-line
const REGEX_EMAIL = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i

const isValidEmail = text => REGEX_EMAIL.test(text.toLowerCase())

const SignUp = ({ email, setEmail, internal }) => (
  <>
    <NewsTitle internal={internal}>Get every post in your inbox</NewsTitle>
    <Form
      internal={internal}
      action="https://tinyletter.com/AtilaFassina"
      method="post"
      target="popupwindow"
      onSubmit="window.open('https://tinyletter.com/AtilaFassina', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"
    >
      <Label internal={internal} for="email">
        <LabelText internal={internal} isFormFilled={!!email}>
          e-mail
        </LabelText>
        <Input
          type="email"
          name="email"
          id="tlemail"
          onChange={evt => {
            setEmail(evt.currentTarget.value)
          }}
          value={email}
        />
      </Label>
      <input type="hidden" value="1" name="embed" />
      <Submit internal={internal} type="submit" disabled={!isValidEmail(email)}>
        Subscribe
      </Submit>
    </Form>
    <List internal={internal}>
      <li>No spam. Ever.</li>
      <li>Unsubscribe anytime. Easily.</li>
    </List>
  </>
)

export default ({ internal }) => {
  const [email, setEmail] = useState('')

  return (
    <FormWrapper internal={internal}>
      <Inner internal={internal}>
        <SignUp internal={internal} email={email} setEmail={setEmail} />
      </Inner>
    </FormWrapper>
  )
}
