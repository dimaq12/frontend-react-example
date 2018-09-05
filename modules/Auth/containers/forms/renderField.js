import React, { Component } from 'react'
import { input, label, inputHolder, error } from '../../../../common/helpers/styles'
import styled from 'styled-components'

const FormLabel = styled.label`
  ${label}
`;

const FormInput = styled.input`
  ${input}
`;

const StyledIcon = styled.div`
  display: block;
  width: 20px;
  height: 20px;
  color: #fff;
  &:before{
    font-size: 1.4em;
    line-height: 2em;
  }
`

const InputHolder = styled.div`
  ${inputHolder}
`
const ErrorBlock = styled.div`
  ${error}
`

const renderField = ({
                       input,
                       label,
                       type,
                       icon,
                       meta: { touched, error, warning }
                     }) => (
  <div>
    <FormLabel>{label}</FormLabel>
    <div>
      <InputHolder>
        <StyledIcon className={'fa' + ' ' + (icon)}/>
        <FormInput {...input} type={type} />
      </InputHolder>
      {touched &&
      ((error && <ErrorBlock>{error}</ErrorBlock>) ||
        (warning && <ErrorBlock>{warning}</ErrorBlock>))}
    </div>
  </div>
);

export default renderField;