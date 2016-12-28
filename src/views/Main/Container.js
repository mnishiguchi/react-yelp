// The Container houses our main map and the listing of search results.
// The google map will be hidden initially then the Map component will make it
// visible.
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

// Utils
import {searchNearby} from '../../utils/googleApiHelpers'

// Components
import Header  from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

// Styles
import './Container.css'

class Container extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      places    : [],
      pagination: null
    }
  }

  render() {
    const { google, loaded, children } = this.props
    const { places }                   = this.state

    const childrenWithProps = (children) ?
      React.cloneElement(children, {
        google,
        loaded,
        places 
      }) : null

    return (
      <div className="MainViewContainer">
        <Map
          google={this.props.google}
          onReady={this._onReady.bind(this)}
          visible={false}
          className="wrapper"
        >

          <Header/>

          <Sidebar
            title={'Restaurants'}
            places={this.state.places}
            handleListingItemClick={this._handleListingItemClick.bind(this)}
          />

          <div className="content">
            {childrenWithProps}
          </div>
        </Map>
      </div>
    )
  }


  // ---
  // PRIVATE METHODS
  // ---


  _handleListingItemClick() {

    // TODO

  }


  /**
   * Invoked when the map is ready and mounted.
   */
  _onReady(mapProps, map) {
    const {google} = this.props
    const opts = {
      location: map.center,
      radius  : '500',
      // https://developers.google.com/places/supported_types
      types   : ['cafe', 'restaurant']
    }

    searchNearby(google, map, opts)
      .then((places, pagination) => {
        this.setState({
          places,
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
