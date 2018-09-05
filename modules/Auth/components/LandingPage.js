import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { button } from '../../../common/helpers/styles'

const Content = styled.div`
  width: 500px;
  margin: 0 auto;
  overflow: hidden;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`
const Heading = styled.h1`
  font-size: 2em;
  color: #fff;
  text-align: center;
`

const StyledLink = styled(Link)`
  color: #fff;
  font-size: 2em;
  ${button}
`

class LandingPage extends Component {
  render () {
    return (
      <Content>
        <Heading>Create your perfect todo list!</Heading>
        <StyledLink to='/login'>Login</StyledLink>
        <StyledLink to='/register'>Signup</StyledLink>
      </Content>
    )
  }
}

export default LandingPage
