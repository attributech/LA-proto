import React from 'react'
import Page from '../components/Page'
import Header from '../components/Header'

import image from '../images/campaign.jpg'

export default () => (
  <div>
    <Page
      image={image}
      noHeader
      noNav
      noFooter
    />
    <Header campaign/>
  </div>
)
