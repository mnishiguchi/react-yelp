import React                     from 'react'
import {Router, Route, Redirect} from 'react-router'

// Components
import Home from './containers/Home'

const configureRoutes = () => (
  <Router>
    <Route path="/" component={Home} />
    <Redirect from="*" to="/" />
  </Router>
)

export default configureRoutes
