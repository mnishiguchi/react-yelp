import React from 'react'

import './Rating.css'

const RatingIcon = (props) => (<span>★</span>)

// FIXME
const Rating = ({percentage}) => {

  const style = {
    width: `${(percentage || 0) * 100}%`
  }
  return (
    <div className="Rating">
      <div className="Rating__top" style={style}>
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
      </div>
      <div className="Rating__bottom">
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
        <RatingIcon />
      </div>
    </div>
  )
}

export default Rating
