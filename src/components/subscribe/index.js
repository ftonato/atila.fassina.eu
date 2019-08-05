import React, { useState } from 'react'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
  Form,
  FormWrapper,
  Submit,
  Inner,
  NewsTitle,
  Label,
  LabelText,
  Input,
  List,
  Thankyou
} from './styles'

const submitForm = async (email, { MMERGE1 }, setStatus) => {
  try {
    const response = await addToMailchimp(email, { MMERGE1 })
    setStatus({ status: 200, ...response })

    return
  } catch (error) {
    setStatus({ status: 400, ...error })

    return
  }
}

const SignUp = ({ data, request, setStatus, setFormData }) => (
  <>
    <NewsTitle>Get every post in your inbox</NewsTitle>
    <Form
      onSubmit={evt => {
        evt.preventDefault()
        submitForm(data.email, { MMERGE1: data.name }, setStatus)
      }}
    >
      <Label for="name">
        <LabelText isFormFilled={!!data.name}>Preferred Name</LabelText>
        <Input
          name="name"
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
      <Label for="email">
        <LabelText isFormFilled={!!data.email}>e-Mail</LabelText>
        <Input
          name="email"
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
  </>
)

const SubscriptionSent = ({ status }) => {
  debugger
  switch (status) {
    case 200:
      return (
        <Thankyou>
          <span>Thank you</span>
        </Thankyou>
      )
  }
}

export default () => {
  const [request, setStatus] = useState({ status: 0, response: {} })

  const [data, setFormData] = useState({
    name: '',
    email: ''
  })
  return (
    <FormWrapper>
      <Inner>
        {request.status !== 200 ? (
          <SignUp
            data={data}
            request={request}
            setStatus={setStatus}
            setFormData={setFormData}
          />
        ) : (
          SubscriptionSent(request)
        )}
      </Inner>
    </FormWrapper>
  )
}
