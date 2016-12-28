import React     from 'react'
import {Route, IndexRoute} from 'react-router'

import Container from './Container'
import Map       from './Map'

/*
The Container will load the google map but it is hidden by default.
Then the Map component will show the map.
 */
const configureMainRoutes = () => {
  return (
    <Route path="/" component={Container} >
      <IndexRoute component={Map} />
      <Route path="map" component={Map} />
    </Route>
  )
}

export default configureMainRoutes
