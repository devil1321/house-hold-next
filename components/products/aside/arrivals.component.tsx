import React from 'react'
import styled from 'styled-components'

const Arrivals = () => {
  return (
    <ArrivalsStyle>
      <div className='products__arrivals'>
        <h3>New Arrivals</h3>
        <p>New Arrivals</p>
      </div>
    </ArrivalsStyle>
  )
}

const ArrivalsStyle = styled.div`
    .products__arrivals{
      h3,p{
        margin:10px 0px;
      }
    }
`


export default Arrivals
