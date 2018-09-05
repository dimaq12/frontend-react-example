import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import constants from '../../../common/constants'
import { input, styledIcon, buttonHolder, inputHolder, label, button, error, formWrap, signUpBtn, heading } from '../../../common/helpers/styles'

import { actions as authActions, NAME as AUTH_NAME } from '../'
import styled from 'styled-components'

const LoginForm = styled.div`
  ${formWrap}
`;

const FloatedLink = styled(Link)`
  float: right;
  & div:before{
    color: #90ee90;
  }
`;

const ButtonHolder = styled.div`
  ${buttonHolder}
`;

const ErrorBlock = styled.div`
  ${error}
`

const InputHolder = styled.div`
  ${inputHolder}
`

const StyledIcon = styled.div`
  ${styledIcon}
`
const SignUp = styled(Link)`
  ${signUpBtn}
`;

const FormHeading = styled.h1`
  ${heading}
`;

const FormLabel = styled.label`
  ${label}
`;

const FormInput = styled.input`
  ${input}
`;

const StyledButton = styled.button`
  ${button}
`;


function mapStateToProps (state) {
  return {
    ...state[AUTH_NAME]
    // ...state[SOME_OTHER_NAME]
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  ...authActions
  // ...SomeOterModuleActions
}, dispatch);

class LoginPage extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    this.props.logout()
  }

  handleChange = (e) => {
    let {name, value} = e.target;
    this.props.loginFormChange(name, value)
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.props;
    if (!email) {
      this.props.showError('email');
      return
    }
    if (!password) {
      this.props.showError('password');
      return
    }

    this.props.login(email, password)
  };

  render () {
    const { isRequesting, emailError, passwordError, error, token } = this.props;
    return (
      <LoginForm>
        <FloatedLink to='/'>
          <StyledIcon className="fas fa-times lifted"/>
        </FloatedLink>
        <FormHeading>Log in</FormHeading>
        <form name='form' onSubmit={this.handleSubmit}>
          <div>
            <FormLabel >Email</FormLabel >
            <InputHolder>
                <StyledIcon className="fas fa-at"/>
                <FormInput type='text' className='form-control' name='email' onChange={this.handleChange} />
            </InputHolder>
            {emailError &&
            <ErrorBlock>Email is required</ErrorBlock>
            }
          </div>
          <div>
            <FormLabel>Password</FormLabel >
            <InputHolder>
              <StyledIcon className="fas fa-key"/>
              <FormInput type='password' className='form-control' name='password' onChange={this.handleChange} />
            </InputHolder>
            {passwordError &&
            <ErrorBlock>Password is required</ErrorBlock>
            }
          </div>
          <div>
            <StyledButton className='btn btn-promary'>Log in</StyledButton>
            {isRequesting &&
            <img src={constants.loading} />
            }
            <ButtonHolder>
              <SignUp to='/register'> Sign Up </SignUp>
            </ButtonHolder>
          </div>
          {error &&
          <ErrorBlock>{error}</ErrorBlock>
          }
        </form>
        {!error && token &&
        <Redirect to={{ pathname: '/dashboard' }} />
        }
      </LoginForm>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
