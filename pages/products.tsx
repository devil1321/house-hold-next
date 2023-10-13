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
            <ProductsComponents.Heading />
            <div className="products__products-place">
              {redux.products.slice(9,21).map((p:any) => <ProductsComponents.Product key={p.id} />)}
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
    ${styles.mixins.flex('row','space-between','center',null)};
    div:first-of-type{
      width:270px;
    }
    .products__products-container{
      width:75%;
    }
  }

`

export default Products
