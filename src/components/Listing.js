import React  from 'react'

import ListingItem from './ListingItem'

import './Listing.css'

const Listing = ({places, handleClickListingItem}) => {
  return (
    <ul className="Listing list-group">
      {
        places.map(place => (
          <ListingItem
            place={place}
            onClick={handleClickListingItem}
            key={place.id}
          />
        ))
      }
    </ul>
  )
}

export default Listing
