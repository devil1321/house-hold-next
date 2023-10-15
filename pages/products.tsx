import { GlobalComponents } from '@/components/global'
import { ProductsComponents } from '@/components/products'
import { styles } from '@/styles/styles'
import React from 'react'
import styled from 'styled-components'

const Products:React.FC<any> = ({redux}) => {
  return (
    <ProductsStyle>
      <GlobalComponents.Layout className='products' title="Products" meta={[]}>
        <GlobalComponents.Search products={redux.products} />
        <ProductsComponents.Banner 
          imgSrc='/assets/products/banner.png' 
          heading='Premium MEMBER EXCLUSIVE '
          subHeading="15% OFF EVERYTHING + EXTRA gift card & coupon Offers" 
          footer='NOT A MEMBER? JOIN NOW TO SHOP'
        />
        <div className="products__main">
          <ProductsComponents.AsideComponents.Aside />
          <div className="products__products-container">
            <ProductsComponents.Heading heading='BEDROOM' text='TRANSFORM YOUR BEDROOM INTERIOR WITH OUR GREAT SELECTION OF ACCESSORIES'/>
            <ProductsComponents.Nav />
            <div className="products__products-place">
              {redux.products.slice(9,21).map((p:any) => <ProductsComponents.Product key={p.id} redux={redux} inCart={p.inCart} id={p.id} imgSrc={p.img} name={p.name} colors={p.colors} price={p.price}/>)}
              <button>LOAD MORE</button>
            </div>
          </div>
        </div>
      </GlobalComponents.Layout>
    </ProductsStyle>
  )
}

const ProductsStyle = styled.div`
  .products__main{
    padding:0px 40px;
    ${styles.mixins.flex('row','space-between','flex-start',null)};
    & > div:first-of-type{
      width:270px;
    }
  }
  .products__products-container{
    width:75%;
  }
  .products__products-place{
    padding:0px 0px 30px;
    ${styles.mixins.flex('row','space-between','center','wrap')}
    & > div {
      width:30%;
    }
    button{
      margin:0px auto;
    }
    ${styles.components.button}
  }
`

export default Products
