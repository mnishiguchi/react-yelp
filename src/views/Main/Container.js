// MainView displays our main map and the listing of restaurants.
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

// Components
import Stars from '../../components/Stars'

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
      <div className="MainContainer">
        <header>
          <h2>Melp</h2>
          <Stars n={20} />
        </header>

        <Map
          google={google}
          onReady={this._onReady.bind(this)}
          visible={false}
        >
          <ul className="list-group">
            {
              places.map(place => {
                return (
                  <li
                    key={place.id}
                    className="list-group-item"
                  >
                    {place.name}
                  </li>
                )
              })
            }
          </ul>
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
