import { CartComponents } from '@/components/cart'
import { DetailsComponents } from '@/components/details'
import { GlobalComponents } from '@/components/global'
import { styles } from '@/styles/styles'
import React from 'react'
import styled from 'styled-components'

const Cart:React.FC<any> = ({redux}) => {
  return (
    <CartStyle>
      <GlobalComponents.Layout className='cart' title='Cart' meta={[]}>
        <h1>Shopping Cart</h1>
        <div className="cart__main-details">
          <div className="cart__items">
            {redux.products.map((p:any) => <CartComponents.Item key={p.id} redux={redux} product={p} />)}
            <CartComponents.SubSummary summary={redux.summary} />
          </div>
          <CartComponents.Summary summary={redux.summary} />
        </div>
        <DetailsComponents.Carousel products={redux.products} title='Also You May Buy' />
      </GlobalComponents.Layout>
    </CartStyle>
  )
}

const CartStyle = styled.div`
  .cart{
    main{
      padding:30px 50px;
    }
  }
  h1{
    margin:50px 0px;
    text-align:center;
  }
  .cart__main-details{
    ${styles.mixins.flex('row','space-between','center',null)};
  }
  .cart__items{
    width:60%;
  }
  .cart__summary-wrapper{
    width:40%;
  }
`

export default Cart
