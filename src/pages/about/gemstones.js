import React from 'react'
import Page from '../../components/Page'
import image from '../../images/about--gemstones.jpg'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [33.9, 5.2, 32.4, 34.3],
    url: "/about/gemstones-b",
    fix: false
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)