import React from 'react'
import Link from 'gatsby-link'

import Header from '../Header'
import Footer from '../Footer'
import Nav from '../Nav'

import Background from '../Background'
import HitArea from '../HitArea'

export default ({
  image, hitAreaList, noHeader, noNav, noFooter
}) => (
  <div>
  {!noHeader && <Header />}
  {!noNav && <Nav />}
  <Background src={image} />
  {hitAreaList && hitAreaList.map(x => <HitArea {...x} />)}
  {!noFooter && <Footer />}
</div>
)
