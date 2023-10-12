import React from 'react'
import styled from 'styled-components'
import { styles } from '@/styles/styles'

const Icons = () => {
  return (
    <IconsStyle>
      <div className='home__icons'>
        <div className='home__icons-item'>
          <img src="/assets/icons/truck.png" alt="truck" />
          <span>FREE SHIPPING</span>
        </div>
        <div className='home__icons-item'>
          <img src="/assets/icons/refund.png" alt="refund" />
          <span>100% REFUND</span>
        </div>
        <div className='home__icons-item'>
        <img src="/assets/icons/headphones.png" alt="headphones" />
          <span>SUPPORT 24/7</span>
        </div>
        
      </div>
    </IconsStyle>
  )
}

const IconsStyle = styled.div`
  .home__icons{
    margin:30px auto;
    width:70%;
    ${styles.mixins.flex('row','space-between','center',null)}
  }
  .home__icons-item{
    ${styles.mixins.flex('row','space-between','center',null)}
    span{
      margin-left:5px;
    }
  }
`

export default Icons
