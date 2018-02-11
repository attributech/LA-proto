import React from 'react'
import Page from '../../../components/Page'

import image from '../../../images/product--earring-c--zoom.jpg'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [81.7, 0, 18.2, 6.9],
    url: "/product/earring"
  }
]
export default () => (
  <Page
    image={image}
    hitAreaList={hitAreaList}
    noHeader
    noNav
    noFooter
  />
)
