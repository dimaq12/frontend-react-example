import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Link, Redirect } from 'react-router-dom'
import constants from '../../../common/constants';

import SignupForm from './forms/SignupForm'
import { actions as authActions, NAME as AUTH_NAME } from '../'
import { formWrap, styledIcon, heading, error } from '../../../common/helpers/styles'
import styled from 'styled-components'

const LoginForm = styled.div`
  ${formWrap}
`;
const ErrorBlock = styled.div`
  ${error}
`
const FloatedLink = styled(Link)`
  float: right;
  & div:before{
    color: #90ee90;
  }
`;

const StyledIcon = styled.div`
  ${styledIcon}
`

const FormHeading = styled.h1`
  ${heading}
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

class SignupPage extends Component {
    handleSubmit = (formValues) => {
      let {email, name, password} = formValues;
      this.props.signup({email, name, password});
    };

    render () {
      const { isRequesting, token, error } = this.props;
      return (
        <LoginForm>
          <FloatedLink to='/'>
            <StyledIcon className="fas fa-times"/>
          </FloatedLink>
          <FormHeading>Sign up</FormHeading>
          <SignupForm onSubmit={this.handleSubmit} />
          {isRequesting &&
          <img src={constants.loading} />
          }

          {error &&
          <ErrorBlock className='err-block'>{error}</ErrorBlock>
          }

          {token &&
            <Redirect to={{ pathname: '/dashboard', state: { from: this.props.location } }} />
          }
        </LoginForm>
      )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupPage)
