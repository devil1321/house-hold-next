import React from 'react'
import ShopByRoom from './shop-by-room.component'
import ShopByConcept from './shop-by-concept.component'
import Gender from './gender.component'
import Price from './price.component'
import Arrivals from './arrivals.component'
import Colors from './colors.component'
import styled from 'styled-components'

const Aside = () => {
  return (
    <AsideStyle>
      <div className='products__aside'>
        <Arrivals />
        <ShopByRoom />
        <ShopByConcept />
        <Gender />
        <Colors />
        <Price />
      </div>
    </AsideStyle>
  )
}

const AsideStyle = styled.div`
  .products__aside{
    padding:30px 10px;
    width:100%;
  }
`

export default Aside
