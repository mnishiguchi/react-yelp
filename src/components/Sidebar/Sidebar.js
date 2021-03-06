import React  from 'react'
import Listing from './Listing/Listing'

import './Sidebar.css'

const Sidebar = ({ title, places, emitter }) => {
  return (
    <div className="Sidebar">
      <div className="heading">
        <h2 className="h3">{title}</h2>
      </div>
      <Listing
        places={places}
        emitter={emitter}
      />
    </div>
  )
}

export default Sidebar
