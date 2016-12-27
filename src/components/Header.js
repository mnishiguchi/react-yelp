import React  from 'react'
import {Link} from 'react-router'

import './Header.css'

const Header = () => {

  return (
    <div className="Header">
      <Link to="/">
        <h1>Melp</h1>
      </Link>
      <section>
        mnishiguchi.com
      </section>
    </div>
  )
}

export default Header
