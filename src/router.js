import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

// Components
import Purchase from './components/pages/purchase'
import Subscription from './components/pages/subscription'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Purchase} exact={true} />
    <Route path="/subscription" component={Subscription} exact={true} />
    <Redirect to="/" />
  </BrowserRouter>
)

export default Router
