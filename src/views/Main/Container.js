// MainView displays our main map and the listing of restaurants.
import React from 'react'
import Map, {GoogleApiWrapper} from 'google-maps-react'

// Components
import Stars from '../../components/Stars'

// Styles
import './Container.css'

const Container = ({google}) => {
  return (
    <div className="MainContainer">
      <header>
        <h2>Welcome to React</h2>
      </header>

      <Stars n={20} />

      <Map
        google={google}
      />
    </div>
  )
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
