import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import validate from './validator'
import renderField from './renderField'
import {  button, signUpBtn } from '../../../../common/helpers/styles'
import styled from 'styled-components'

const ButtonHolder = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;

const StyledResetBtn = styled.button`
  ${signUpBtn}
`;

const StyledButton = styled.button`
  ${button}
`;


let SignupForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Field name='name' type='text' icon='fa-user' component={renderField} label="Username"/>
      <Field name='email' type='email' icon='fa-at' component={renderField} label="Email"/>
      <Field name='password' type='password' icon='fa-key' component={renderField} label="Password"/>
      <Field name='passwordConfirm' type='password' icon='fa-key' component={renderField} label="Confirm Password"/>

      <StyledButton type='submit' disabled={submitting}>Sign up</StyledButton>
      <ButtonHolder>
        <StyledResetBtn type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </StyledResetBtn>
      </ButtonHolder>
    </form>
  )
};

SignupForm = reduxForm({
  // a unique name for the form
  form: 'signup',
  validate
})(SignupForm);

export default SignupForm
