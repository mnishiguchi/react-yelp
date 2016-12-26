// MainView displays our main map and the listing of restaurants.
import React from 'react'

let stars = []
for (let i = 0; i < 10; ++i) {
  stars.push(<i className="fa fa-star" key={i}></i>)
}

const Container = () => {
  return (
    <div className="Container">
      <div className="App-header">
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        {stars}
      </p>
    </div>
  )
}

export default Container
