import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

// Components
import Purchase from './components/pages/purchase'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Purchase} exact={true} />
    <Redirect to="/" />
  </BrowserRouter>
)

export default Router
