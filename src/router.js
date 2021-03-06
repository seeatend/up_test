import React from 'react'
import { Route, BrowserRouter, Redirect } from 'react-router-dom'

// Components
import Purchase from './components/pages/purchase'
import Subscription from './components/pages/subscription'
import Checkout from './components/pages/checkout'
import Done from './components/pages/done'

const Router = () => (
  <BrowserRouter>
    <Route path="/" component={Purchase} exact={true} />
    <Route path="/subscription" component={Subscription} exact={true} />
    <Route path="/checkout" component={Checkout} exact={true} />
    <Route path="/done" component={Done} exact={true} />
    
  </BrowserRouter>
)

export default Router
