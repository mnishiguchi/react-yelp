import React  from 'react'

import ListingItem from './ListingItem'

import './Listing.css'

const Listing = ({ places, handleListingItemClick }) => {
  return (
    <ul className="Listing list-group">
      {
        places.map(place => (
          <ListingItem
            place={place}
            onClick={handleListingItemClick}
            key={place.id}
          />
        ))
      }
    </ul>
  )
}

export default Listing
