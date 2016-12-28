import React             from 'react'
import {Route, Redirect} from 'react-router'

import configureMainRoutes from './containers/MainContainer/routes'

function configureRoutes() {
  const mainRoutes = configureMainRoutes()

  return (
    <Route>
      {mainRoutes}
      <Redirect from="*" to="/" />
    </Route>
  )
}

export default configureRoutes
