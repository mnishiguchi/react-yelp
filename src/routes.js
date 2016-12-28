import React             from 'react'
import {Route, Redirect} from 'react-router'

import configureMainRoutes from './views/main/routes'

function configureRoutes() {
  const main = configureMainRoutes()
  
  return (
    <Route>
      {main}
      <Redirect from="*" to="/" />
    </Route>
  )
}

export default configureRoutes
