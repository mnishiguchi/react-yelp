import React     from 'react'
import { Route } from 'react-router'

import Container from './Container'

const configureMainRoutes = () => {
  return (
    <Route path="/" component={Container} />
  )
}

export default configureMainRoutes
