import React from 'react'
import Page from '../../components/Page'

import image from '../../images/collection--overview--readmore.jpg'

const hitAreaList = [
  {
    id: 1,
    pos: [17.8, 38.7, 15.4, 20.3],
    url: "/product/chain",
    fix: false
  },
  {
    id: 2,
    pos: [34.2, 38.7, 15.4, 20.3],
    url: "/product/chain",
    fix: false
  },
  {
    id: 3,
    pos: [50.3, 38.7, 15.4, 20.3],
    url: "/product/earring",
    fix: false
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)

