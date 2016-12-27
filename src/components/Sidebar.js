import React  from 'react'
import Listing from './Listing'

import './Sidebar.css'

const Sidebar = ({title, places, onClickListingItem}) => {

  return (
    <div className="Sidebar">
      <div className="heading">
        <h2 className="h3">{title}</h2>
      </div>
      <Listing
        places={places}
        onClickListingItem={onClickListingItem}
      />
    </div>
  )
}

export default Sidebar
