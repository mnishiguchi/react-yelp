// MainView displays our main map and the listing of restaurants.
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

// Utils
import {searchNearby} from '../../utils/googleApiHelpers'

// Components
import Header  from '../../components/Header'
import Sidebar from '../../components/Sidebar'

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
    let children = null
    if (this.props.children) {
      children = React.cloneElement(
        this.props.children,
        {
          google: this.props.google,
          places: this.state.places,
          loaded: this.props.loaded
        }
      )
    }

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
            onClickListingItem={this._onClickListingItem.bind(this)}
          />

          <div className="content">
            {children}
          </div>
        </Map>
      </div>
    )
  }


  // ---
  // PRIVATE METHODS
  // ---


  _onClickListingItem() {

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
