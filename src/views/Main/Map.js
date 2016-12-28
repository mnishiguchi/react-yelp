import React         from 'react'
import Map, {Marker} from 'google-maps-react'

class MapComponent extends React.Component {

  render() {
    const {
      map,
      google,
      zoom,
      onMove,
      handleMapClick,
      children,
    } = this.props;

    const visible = !children || React.Children.count(children) === 0

    return (
      <div className="MapComponent">
        <Map
          map={map}
          google={google}
          zoom={zoom}
          onRecenter={onMove}
          onDragend={onMove}
          onClick={handleMapClick}
          visible={visible}
          >
            {this._renderChildren()}
          </Map>
      </div>
    )
  }


  // ---
  // PRIVATE METHODS
  // ---


  // TODO: Understand and explain this function.
  _renderChildren() {
    const {
      map,
      google,
      children,
    } = this.props;

    if (React.Children.count(children) > 0) {
      return React.Children.map(children, (child) => {
        return React.cloneElement(child, this.props, { map, google })
      })
    } else {
      return this._renderMarkers();
    }
  }

  _renderMarkers() {
    if (!this.props.places) { return null }

    return this.props.places.map(place => (
      <Marker
        key={place.id}
        place={place}
        position={place.geometry.location}
      />
    ))
  }
}

export default MapComponent
