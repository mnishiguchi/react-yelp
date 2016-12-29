// MainContainer is a container component that:
// - houses the map and the listing of search results; and
// - loads the google map.
// NOTE: We use the google-maps-react library's Map component as a wrapper of
// this entire view so that we can handle all the google maps api related logic here.
// The google-provided map will be hidden initially then our Map component will
// make it visible.
import React, {PropTypes as T} from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'
import {EventEmitter}          from 'fbemitter'

// Utils
import {searchNearby} from '../../utils/googleApiHelpers'

// Components
import Header  from '../../components/Header/Header'
import Sidebar from '../../components/Sidebar/Sidebar'

// Styles
import './MainContainer.css'

class MainContainer extends React.Component {
  static contextTypes = {
    router: T.object
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      center    : { lat: '38.9019', lng: '-77.0341' },
      zoom      : 15,
      places    : [],
      radius    : 1000,
      types     : ['cafe', 'restaurant'],
      pagination: null
    }
  }

  render() {
    const { google, loaded, children } = this.props
    const { center, zoom, places, types } = this.state

    const propsForChildren = {
      google,
      loaded,
      places,
      center,
      zoom,
      router: this.context.router,
      emitter: this._emitter,
    }

    const childrenWithProps = children ? React.cloneElement(children, propsForChildren) : null

    return (
      <Map
        className="MainContainer"
        google={google}
        onReady={(mapProps, map) => this._onMapReady(mapProps, map)}
        visible={false}
      >

        <Header/>

        <Sidebar
          title={types.join(', ')}
          places={places}
          emitter={this._emitter}
        />

        <div className="content">
          {childrenWithProps}
        </div>
      </Map>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  componentWillMount() {
    this._subscribeEvents()
  }

  componentWillUnmount() {
    this._unsubscribeEvents()
  }


  // ---
  // PRIVATE METHODS
  // ---


  /**
   * Sets up an emitter and listens for events from children.
   * - https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods
   * - http://qiita.com/mizchi/items/6a3500e598ec36746509
   */
  _subscribeEvents() {
    this._emitter = new EventEmitter()

    this._emitter.addListener('LISTING_ITEM_CLICKED', ({ place }) => {
      console.log(`LISTING_ITEM_CLICKED: ${place.id}`)
    })

    this._emitter.addListener('MAP_MOVED', (payload) => {
      console.log(`MAP_MOVED`)
    })

    this._emitter.addListener('MAP_CLICKED', (payload) => {
      console.log(`MAP_CLICKED`)
    })

    this._emitter.addListener('MAP_MARKER_CLICKED', ({ place }) => {
      console.log(`MAP_MARKER_CLICKED: ${place.id}`)

      const router = this.context.router
      router.push(`/detail/${place.id}`)
    })
  }

  /**
   * Removes all the listeners that are registered on the emitter.
   */
  _unsubscribeEvents() {
    this._emitter.removeAllListeners()
  }

  /**
   * Invoked when the map is ready and mounted.
   */
  _onMapReady(mapProps, map) {
    const {google} = this.props
    const {radius, types} = this.state

    this._setMapCenter(google, map)

    const request = {
      location: map.center,
      radius,
      // https://developers.google.com/places/supported_types
      types
    }

    searchNearby(google, map, request)
      .then((places, pagination) => {
        this.setState({
          places,
          pagination
        })
      }).catch((reason, status) => {
        console.log(reason)
      })
  }

  /**
   * Re-centers the map according to the current center's lat-lng.
   */
  _setMapCenter(google, map) {
    const { center }   = this.state
    const { lat, lng } = center

    map.setCenter(new google.maps.LatLng(lat, lng))
  }
} // end class


const googleApiConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
}

// GoogleApiWrapper() is a higher-order component that:
// - takes care of loading the google api along with our apiKey
// - gives us access to the lazily-loaded google api and
// - provides this component with a google prop which references the object
// loaded by the google script.
export default GoogleApiWrapper(googleApiConfig)(MainContainer)
