import { CartComponents } from '@/components/cart'
import { DetailsComponents } from '@/components/details'
import { GlobalComponents } from '@/components/global'
import { styles } from '@/styles/styles'
import { redirect } from 'next/dist/server/api-utils'
import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Cart:React.FC<any> = ({redux}) => {
  return (
    <CartStyle>
      <GlobalComponents.Layout className='cart' title='Cart' meta={[]}>
        {redux.cart.length > 0 && <h1>Shopping Cart</h1>}
        {redux.cart.length > 0 
          ? <React.Fragment>
              <div className="cart__main-details">
                <div className="cart__items">
                  {redux.cart.map((p:any) => <CartComponents.Item key={p.id} redux={redux} product={p} />)}
                  {redux.cart.length > 0 && <CartComponents.SubSummary summary={redux.summary} />}
                </div>
                <CartComponents.Summary summary={redux.summary} />
              </div>
              <DetailsComponents.Carousel redux={redux} products={redux.products} title='Also You May Buy' />
            </React.Fragment>
            : <div className='cart__empty'>
                <h1>Cart Is Empty</h1>
                <Link href="/products" className='cart__link'><button>Continue Shopping</button></Link>
              </div>
            }
      </GlobalComponents.Layout>
    </CartStyle>
  )
}

const CartStyle = styled.div`
  .cart{
    main{
      padding:30px 50px;
      ${styles.mixins.breakpoint_down('small',`
        padding:30px 10px;
      `)}
    }
    .cart__link{
      width:100%;
      text-align:center;
      display:block;
      margin:0px auto;
      ${styles.components.button}
    }
  }
  h1{
    margin:30px 0px;
    text-align:center;
  }
  .cart__main-details{
    ${styles.mixins.flex('row','space-between','flex-start',null)};
    ${styles.mixins.breakpoint_down('small',`
      ${styles.mixins.flex('row','space-between','flex-start','wrap')};
    `)}
  }
  .cart__items{
    width:60%;
    ${styles.mixins.breakpoint_down('small',`
      width:100%;
    `)}
  }
  .cart__summary-wrapper{
    padding:0px 30px;
    width:40%;
    ${styles.mixins.breakpoint_down('small',`
      width:100%;
    `)}
  }
`

export default Cart
