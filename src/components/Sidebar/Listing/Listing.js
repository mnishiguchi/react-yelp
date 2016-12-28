import React  from 'react'

import Rating from './Rating/Rating'

import './Listing.css'

const Item = (props) => {
  const {place, emitter} = props

  return (
    <li
      key={place.id}
      onClick={(e) => handleClick(e, place)}
      className="ListingItem list-group-item"
    >
      <h4>{place.name}</h4>
      <div className="rating-wrapper">
        <Rating percentage={(place.rating || 0)/ 5}/>
      </div>
      <div className="clearfix"></div>
    </li>
  )

  function handleClick(e, place) {
    const payload  = { place }
    emitter.emit('LISTING_ITEM_CLICKED', payload)
  }
}


const Listing = ({ places, emitter }) => {
  return (
    <ul className="Listing list-group">
      {
        places.map(place => (
          <Item
            place={place}
            emitter={emitter}
            key={place.id}
          />
        ))
      }
    </ul>
  )
}

export default Listing
