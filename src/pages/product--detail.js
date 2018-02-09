import React from 'react'
import Page from '../components/Page'
import image from '../images/product-detail.png'

const hitAreaList = [
  {
    id: 1,
    key: 1,
    pos: [18.3, 9.8, 31.7, 31.4],
    url: "/product-closeup-a"
  },
  {
    id: 2,
    key: 2,
    pos: [50.1, 9.8, 31.4, 31.4],
    url: "/product-closeup-b"
  },
  {
    id: 3,
    key: 3,
    pos: [45.4,49.2,9.4,2.6],
    url: "/collection--overview"
  },
  {
    id: 4,
    key: 4,
    pos: [45.4,54.1,9.4,3.6],
    url: "/collection--overview"
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)
