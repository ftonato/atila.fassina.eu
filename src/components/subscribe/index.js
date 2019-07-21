import React, { useState } from 'react'
import {
  Form,
  FormWrapper,
  Submit,
  Inner,
  NewsTitle,
  Input,
  List
} from './styles'

export default () => {
  const [data, setFormData] = useState({
    name: '',
    email: ''
  })
  return (
    <FormWrapper>
      <Inner>
        <NewsTitle>Get every post in your inbox</NewsTitle>
        <Form
          action="https://fassina.us3.list-manage.com/subscribe/post"
          method="POST"
        >
          <input type="hidden" name="u" value="ffa1a5e8ef4db5b2506125bbf" />
          <input type="hidden" name="id" value="9e9a87a7b0" />
          <Input
            type="text"
            value={data.name}
            placeholder="Preferred name"
            onChange={evt => {
              setFormData({ email: evt.currentTarget.value })
            }}
          />
          <Input
            type="email"
            name="b_email"
            tabindex="-1"
            onChange={evt => {
              setFormData({ name: evt.currentTarget.value })
            }}
            value={data.email}
            placeholder="E-mail"
            id="b_email"
          />
          <Submit type="submit">Subscribe</Submit>
        </Form>
        <List>
          <li>No spam.Ever.</li>
          <li>Unsubscribe anytime. Easily.</li>
        </List>
      </Inner>
    </FormWrapper>
  )
}
