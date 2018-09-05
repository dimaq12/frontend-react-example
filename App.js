import React, { Component } from 'react'
import { Router, Route } from 'react-router-dom'
import { history } from './common/helpers/history'

import { PrivateRoute } from './common/PrivateRoute'
import { PublicRoute } from './common/PublicRoute'
import Root from './modules/Root/containers/Root'
import LandingPage from './modules/Auth/components/LandingPage'
import LoginPage from './modules/Auth/containers/LoginPage'
import SignupPage from './modules/Auth/containers/SignupPage'
import styled, { injectGlobal } from 'styled-components'
import '@fortawesome/fontawesome-free/css/all.css'; 

injectGlobal`
  body {
    margin: 0;
    font-family: 'Lato';
    color: #333;
  }
`;

import bg  from './assets/images/bg1.jpg'

const BackgroundHolder = styled.div`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-attachment: fixed; 
  background-size: cover;
  min-height: 100vh;
`;

class App extends Component {
  render () {
    return (
      <Router history={history}>
        <BackgroundHolder>
          <Route exact path='/' component={LandingPage} />
          <PublicRoute path='/login' component={LoginPage} />
          <PublicRoute path='/register' component={SignupPage} />
          <PrivateRoute path='/dashboard' component={Root} />
        </BackgroundHolder>
      </Router>
    )
  }
}

export default App
