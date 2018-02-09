import React from 'react'
import Link from 'gatsby-link'

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">campaign</Link>
      </li>
      <li>
        <Link to="/collection--overview">collections</Link>
        <ul>
          <li><Link to="/collection--overview">All Products</Link></li>
          <li><Link to="/frieda">Frieda</Link></li>
          <li><Link to="/elsa">Elsa</Link></li>
          <li><Link to="/limited">Limited</Link></li>
          <li><Link to="/special">Special</Link></li>
        </ul>
      </li>
      <li>
        <Link to="/about">about</Link>
        <ul>
          <li><Link to="/history">History</Link></li>
          <li><Link to="/philosophy">Philosophy</Link></li>
          <li><Link to="/gemstones">Gemstones</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </li>
    </ul>
  </nav>
)

export default Nav



