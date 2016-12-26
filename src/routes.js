import React              from 'react'
import {Router, Redirect} from 'react-router'

// Components
import configureMainRoutes from './views/Main/routes'

const main = configureMainRoutes()

const configureRoutes = () => (
  <Router>
    {main}
    <Redirect from="*" to="/" />
  </Router>
)

export default configureRoutes
