import React from 'react'
import Page from '../../components/Page'

import image from '../../images/collection--frieda.jpg'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [17.8, 23.5, 15.4, 20.3],
    url: "/product/chain",
    fix: false
  },
  {
    id: 2,
    key: 2,
    pos: [34.2, 23.5, 15.4, 20.3],
    url: "/product/chain",
    fix: false
  },
  {
    id: 3,
    key: 3,
    pos: [50.3, 23.5, 15.4, 20.3],
    url: "/product/earring",
    fix: false
  }
]
export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)

