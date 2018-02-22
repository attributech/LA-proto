import React from 'react'
import Page from '../../components/Page'

import image from '../../images/collection--overview.jpg'

const hitAreaList = [
  {
    id: 1,
    pos: [17.8, 23.3, 15.4, 20.3],
    url: "/product/earring",
    fix: false
  },
  {
    id: 2,
    pos: [34.2, 23.3, 15.4, 20.3],
    url: "/product/earring",
    fix: false
  },
  {
    id: 3,
    pos: [50.3, 23.3, 15.4, 20.3],
    url: "/product/earring",
    fix: false
  },
  {
    id: 4,
    pos: [34.2, 19.3, 31.5, 3.3],
    url: "/collection/read-more",
    fix: false
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)

