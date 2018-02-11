import React from 'react'
import Page from '../../../components/Page'

import image from '../../../images/product--earring-c.jpg'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [18.4, 0, 63.2, 70.6],
    url: "/product/earring/closeup-c--zoom"
  },
  {
    id: 2,
    key: 2,
    pos: [81.7, 7, 18.2, 63.6],
    url: "/product/earring/closeup-a"
  },
  {
    id: 3,
    key: 3,
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
