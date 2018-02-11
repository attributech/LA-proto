import React from 'react'
import Link from 'gatsby-link'

export default () => (
  <nav>
    <ul>
      <li>
        <Link to="/">campaign</Link>
      </li>
      <li>
        <Link to="/collection/">collections</Link>
      </li>
      <li>
        <Link to="/about/story/">about</Link>
      </li>
    </ul>
  </nav>
)
