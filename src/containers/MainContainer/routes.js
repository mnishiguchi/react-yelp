import React     from 'react'
import {Route, IndexRoute} from 'react-router'

import MainContainer from './MainContainer'
import MapView       from './MapView'

/*
The MainContainer will load the google map but it is hidden by default.
Then the MapView will show the map.
 */
const configureMainRoutes = () => {
  return (
    <Route path="/" component={MainContainer} >
      <IndexRoute component={MapView} />
      <Route path="map" component={MapView} />
    </Route>
  )
}

export default configureMainRoutes
