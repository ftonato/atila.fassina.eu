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
          <Label for="name">
            <LabelText isFormFilled={!!data.name}>Preferred Name</LabelText>
            <Input
              id="name"
              type="text"
              value={data.name}
              onChange={evt => {
                setFormData({
                  ...data,
                  name: evt.currentTarget.value
                })
              }}
            />
          </Label>
          <Label for="b_email">
            <LabelText isFormFilled={!!data.email}>e-Mail</LabelText>
            <Input
              type="email"
              name="b_email"
              tabindex="-1"
              onChange={evt => {
                setFormData({
                  ...data,
                  email: evt.currentTarget.value
                })
              }}
              value={data.email}
              id="b_email"
            />
          </Label>
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
