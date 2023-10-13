import { GlobalComponents } from '@/components/global'
import React from 'react'
import styled from 'styled-components'

const Price = () => {
  return (
    <PriceStyle>
      <div className='products__price'>
        <h3>Price</h3>
        <GlobalComponents.Checkbox name="0$ – 40$" />
        <GlobalComponents.Checkbox name="40$ – 100$" />
        <GlobalComponents.Checkbox name="100$ – 150$" />
        <GlobalComponents.Checkbox name="150$ – 175$" />
        <GlobalComponents.Checkbox name="175$ – 250$" />
        <GlobalComponents.Checkbox name="250$ – 350$" />
      </div>
    </PriceStyle>
  )
}

const PriceStyle = styled.div`
  h3{
    margin:10px 0px;
  }
`

export default Price
