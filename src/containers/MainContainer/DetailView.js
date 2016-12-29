import React, { PropTypes as T } from 'react'
import {Link} from 'react-router'

import {getDetails} from '../../utils/googleApiHelpers'

// DetailView is responsible for showing the data associated with a place.
class DetailView extends React.Component {
  static childContextTypes = {
    router: T.object,
  }

  constructor(props, context) {
    super(props, context)

    this.state = {
      loading : true,
      place   : {},
      location: {}
    }
  }

  render() {
    const { placeId } = this.props.params
    const { place } = this.state

    // if (this.state.loading) {
    //   return (<div>Loading...</div>)
    // }

    return (
      <div className="DetailView">
        <h2>{place.name}</h2>
        <p>The place ID: { placeId }</p>
        <Link to="/">Back</Link>
      </div>
    )
  }


  // ---
  // LIFECYCLE HOOKS
  // ---


  componentDidMount() {
    console.log("componentDidMount")

    if (this.props.map) {
      this._getDetails(this.props.map)
    }
  }

  componentDidUpdate(prevProps) {
    console.log("componentDidUpdate")
    console.info(this.props.map)

    if (this.props.map &&
        (prevProps.map !== this.props.map ||
         prevProps.params.placeId !== this.props.params.placeId)) {
      this._getDetails(this.props.map);
    }
  }


  // ---
  // PRIVATE METHODS
  // ---


  _getDetails(map) {
    const {google, params} = this.props
    const {placeId} = params

    console.log("_getDetails")
    console.log(this.props)

    this.setState({ loading: true }, () => {
      getDetails(google, map, placeId)
      .then(place => {
        this.setState({
          place,
          location: {
            lat: place.geometry.location.lat(),
            lng: place.geometry.location.lng(),
          },
          loading: false
        })
      })
    })
  }
}

export default DetailView
