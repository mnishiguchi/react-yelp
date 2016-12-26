import React, { PropTypes }      from 'react'
import { Router }                from 'react-router'

// Styles
import 'font-awesome/css/font-awesome.css'
import './App.css'

class App extends React.Component {
  
  static propTypes = {
    routes:  PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
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
        className="App"
        style={{ height: '100%' }}
      >
        {this.content}
      </div>
    )
  }
}

export default App
