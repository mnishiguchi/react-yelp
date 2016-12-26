// MainView displays our main map and the listing of restaurants.
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

import Stars from '../../components/Stars'

import './Container.css'

const Container = () => {
  return (
    <div className="MainContainer">
      <header>
        <h2>Welcome to React</h2>
      </header>

      <Stars n={20} />
    </div>
  )
}

const googleApiConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
}

// GoogleApiWrapper() is a higher-order component that gives us access to the
// lazily-loaded google api and pass through a google prop which references
// the object loaded by the google script.
export default GoogleApiWrapper(googleApiConfig)(Container)
