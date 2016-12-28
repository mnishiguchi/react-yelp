import React, { PropTypes as T } from 'react'
import { Router }                from 'react-router'

class Root extends React.Component {

  static propTypes = {
    routes:  T.object.isRequired,
    history: T.object.isRequired,
  }

  get content() {
    return (
      <Router
        routes={this.props.routes}
        history={this.props.history}
      />
    )
  }

  render() {
    return (
      <div
        className="Root"
        style={{ height: '100%' }}
      >
        {this.content}
      </div>
    )
  }
}

export default Root
