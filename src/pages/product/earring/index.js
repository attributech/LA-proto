import React from 'react'
import Page from '../../../components/Page'
import image from '../../../images/product--earring.jpg'

const hitAreaList = [
  {
    id: 1,
    pos: [17.8, 10.8, 32.2, 32],
    url: "/product/earring/closeup-a",
    fix: false
  },
  {
    id: 2,
    pos: [50, 10.8, 32, 32],
    url: "/product/earring/closeup-b",
    fix: false
  }
]

export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)
