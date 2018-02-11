import React from 'react'
import Link from 'gatsby-link'

import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'
import NavCompact from '../NavCompact'

import Background from '../Background'
import HitArea from '../HitArea'

export default ({ image, hitAreaList, noHeader, noNav, noFooter, navCompact }) => (
  <div>
  {!noHeader && <Header />}
  {!noNav && <Nav />}
  {navCompact && <NavCompact />}
  <Background src={image} />
  {hitAreaList && hitAreaList.map(x => <HitArea key={x.id} {...x} />)}
  
  
  {!noFooter && <HitArea
      key={0} 
      id={0} 
      pos={[34.2, 1.1, 10, 1.8]} 
      url="/about/TOC"
      bottom
    />}
  {!noFooter && <Footer />}
</div>
)
