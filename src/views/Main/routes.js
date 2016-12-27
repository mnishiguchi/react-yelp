import React     from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import Map       from './Map'

const configureMainRoutes = () => {
  return (
    <Route path="/" component={Container} >
      <IndexRoute component={Map} />
      <Route path="map" component={Map} />
    </Route>
  )
}

export default configureMainRoutes
