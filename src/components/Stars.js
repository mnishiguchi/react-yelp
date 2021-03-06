import React from 'react'

const Stars = ({n}) => {
  let stars = []
  for (let i = 0; i < n; ++i) {
    stars.push(<i className="fa fa-star" key={i}></i>)
  }

  return (
    <div className="Stars">
      {stars}
    </div>
  )
}

export default Stars
