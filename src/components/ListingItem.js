import React  from 'react'

import Rating from './Rating'

import './ListingItem.css'

const ListingItem = ({place}) => {

  return (
    <li
      key={place.id}
      className="ListingItem list-group-item"
    >
      <h4>{place.name}</h4>
      <div className="rating-wrapper">
        <Rating percentage={(place.rating || 0)/ 5}/>
      </div>
      <div className="clearfix"></div>
    </li>
  )
}

export default ListingItem
