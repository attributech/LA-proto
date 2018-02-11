import React from 'react'
import Page from '../../../components/Page'
import image from '../../../images/product--chain.jpg'

const hitAreaList = [
  {
    id: 1,
    pos: [17.8, 11.7, 32.2, 32],
    url: "/product/earring/closeup-a",
    fix: false
  },
  {
    id: 2,
    pos: [50, 11.7, 32, 32],
    url: "/product/earring/closeup-b",
    fix: false
  }
]
export default () => (
  <Page image={image} hitAreaList={hitAreaList} />
)
