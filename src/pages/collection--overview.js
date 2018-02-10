import React from 'react'
import Page from '../components/Page'

import image from '../images/collection--overview.jpg'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [17.8, 23.5, 15.4, 20.3],
    url: "/product--detail",
    fix: false
  },
  {
    id: 2,
    key: 2,
    pos: [34.2, 23.5, 15.4, 20.3],
    url: "/product--detail",
    fix: false
  },
  {
    id: 3,
    key: 3,
    pos: [50.3, 23.5, 15.4, 20.3],
    url: "/product--detail",
    fix: false
  },
  {
    id: 4,
    key: 4,
    pos: [66.7, 23.5, 15.4, 20.3],
    url: "/product--detail",
    fix: false
  },
  {
    id: 5,
    key: 5,
    pos: [34.2, 19.5, 31.5, 3.3],
    url: "/product--detail",
    fix: false
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)

