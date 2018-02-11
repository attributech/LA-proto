import React from 'react'
import Link from 'gatsby-link'

const Header = ({ campaign }) => {
  const style = campaign
    ? {
      position: 'fixed',
      left: 100,
      top: '50%',
      transform: 'translateY(-50%)'
    } : {}

  return (
    <h1 style={style}>
      <Link to="/">Leni Adam</Link>
    </h1>
  )
}

export default Header
