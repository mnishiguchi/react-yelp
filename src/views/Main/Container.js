// MainView displays our main map and the listing of restaurants.
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

// Components
import Header  from '../../components/Header'
import Sidebar from '../../components/Sidebar'

// Styles
import './Container.css'

// Utils
import {searchNearby} from '../../utils/googleApiHelpers'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      places    : [],
      pagination: null
    }
  }

  render() {
    const {google} = this.props
    const {places} = this.state

    return (
      <div className="MainViewContainer">
        <Map
          google={google}
          onReady={this._onReady.bind(this)}
          visible={false}
          className="wrapper"
        >

          <Header/>

          <Sidebar
            title={'Restaurants'}
            places={places}
          />

          <div className="content">

          </div>
        </Map>
      </div>
    )
  }

  /**
   * Invoked when the map is ready and mounted.
   */
  _onReady(mapProps, map) {
    const {google} = this.props
    const opts = {
      location: map.center,
      radius  : '500',
      types   : ['cafe']
    }

    searchNearby(google, map, opts)
      .then((result, pagination) => {
        this.setState({
          places: result,
          pagination
        })
      }).catch((reason, status) => {
        console.log(reason)
      })
  }

}

const googleApiConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
}

// GoogleApiWrapper() is a higher-order component that:
// - takes care of loading the google api along with our apiKey
// - gives us access to the lazily-loaded google api and
// - provides this component with a google prop which references the object
// loaded by the google script.
export default GoogleApiWrapper(googleApiConfig)(Container)
