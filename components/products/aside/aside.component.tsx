import React from 'react'
import ShopByRoom from './shop-by-room.component'
import ShopByConcept from './shop-by-concept.component'
import Gender from './gender.component'
import Price from './price.component'

const Aside = () => {
  return (
    <div>
      <ShopByRoom />
      <ShopByConcept />
      <Gender />
      <Price />
    </div>
  )
}

export default Aside
