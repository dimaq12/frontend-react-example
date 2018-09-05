import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../service'

export const PublicRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    getToken()
      ? <Redirect to={{ pathname: '/dashboard', state: { from: props.location } }} />
      : <Component {...props} />
  )} />
)
