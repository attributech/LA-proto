import React from 'react'
import Page from '../components/Page'

import image from '../images/collection--overview.jpg'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [17.8, 23.5, 15.4, 18.3],
    url: "/product--detail"
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)

