import React from 'react'
import styled from 'styled-components'

const ShopByConcept = () => {
  return (
    <ShopByConceptStyle>
      <div className='products__shop-by-concept'>
        <h3>Shop By Concept</h3>
        <p>Conscious</p>
        <p>Premium quality</p>
        <p>Classic collection</p>
      </div>
    </ShopByConceptStyle>
  )
}

const ShopByConceptStyle = styled.div`
    .products__shop-by-concept{
      h3,p{
        margin:10px 0px;
      }
    }
`

export default ShopByConcept
