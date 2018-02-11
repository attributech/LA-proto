import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">campaign</Link>
      </li>
      <li>
        <Link to="/collection">collections</Link>
        <ul>
          <li><Link to="/collection">All Products</Link></li>
          <li><Link to="/collection/frieda">Frieda</Link></li>
          <li><Link to="/collection/elsa">Elsa</Link></li>
          <li><Link to="/collection/limited">Limited</Link></li>
          <li><Link to="/collection/limited">Special</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/about/story">about</Link>
        <ul>
          <li><Link to="/about/story">Story</Link></li>
          <li><Link to="/about/gemstones">Gemstones</Link></li>
          <li><Link to="/about/contact">Contact</Link></li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Nav



