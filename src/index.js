import React            from 'react'
import ReactDOM         from 'react-dom'
import {browserHistory} from 'react-router'

// Load custom environment variables
// https://www.npmjs.com/package/dotenv
// https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md#adding-custom-environment-variables
require('dotenv').load({silent: true})

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
