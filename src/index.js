import React            from 'react'
import ReactDOM         from 'react-dom'
import {browserHistory} from 'react-router'

import configureRoutes  from './routes'

// Components
import App  from './containers/App'

// Styles
import './index.css'

const routes    = configureRoutes()
const mountNode = document.querySelector('#root')

ReactDOM.render(
  <App
    routes={routes}
    history={browserHistory}
  />,
  mountNode
)
