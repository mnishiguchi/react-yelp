import React         from 'react'
import Map, {Marker} from 'google-maps-react'

class MapView extends React.Component {
  constructor(props) {
    super(props)

    // Determine the visibility of the map based on the existence of children prop.
    this._isMapVisible = (!props.children || React.Children.count(props.children) === 0)
  }

  render() {
    const {
      google,
      map,
      center,
      zoom,
      emitter,
    } = this.props

    return (
      <div className="MapView">
        <Map
          google={google}
          map={map}
          initialCenter={center}
          zoom={zoom}
          onDragend={(e) => emitter.emit('MAP_MOVED', {})}
          onClick={(e) => emitter.emit('MAP_CLICKED', {})}
          visible={this._isMapVisible}
        >
          {this._renderChildren()}
        </Map>
      </div>
    )
  }


  // ---
  // PRIVATE METHODS
  // ---


  _renderChildren() {
    return this._isMapVisible ? this._renderMarkers() : this._renderChildrenWithProps()
  }

  _renderMarkers() {
    const { places, emitter } = this.props

    if (!places) { return null }

    return places.map(place => (
      <Marker
        key={place.id}
        place={place}
        position={place.geometry.location}
        onClick={(e) => emitter.emit('MAP_MARKER_CLICKED', {place})}
      />
    ))
  }

  _renderChildrenWithProps() {
    const { google, map, children } = this.props

    React.Children.map(children, (child) => {
      return React.cloneElement(child, this.props, {google, map})
    })
  }
}

export default MapView
