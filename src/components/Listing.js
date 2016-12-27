import React  from 'react'

import ListingItem from './ListingItem'

import './Listing.css'

const Listing = ({places, onClickListingItem}) => {
  return (
    <ul className="Listing list-group">
      {
        places.map(place => (
          <ListingItem
            place={place}
            onClick={onClickListingItem}
            key={place.id}
          />
        ))
      }
    </ul>
  )
}

export default Listing
