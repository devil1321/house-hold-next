import React from 'react'
import styled from 'styled-components';
import { styles } from '@/styles/styles';

interface ProductProps{
    imgSrc:string;
    name:string;
    rating:number;
    price:string;
}

const Product:React.FC<ProductProps> = ({imgSrc,name,rating,price}) => {
  return (
    <ProductStyle>
      <div className="home__product">
        <div className="home__product-image">
          <img src={imgSrc} alt="product-image" />
        </div>
        <div className="home__product-details">
          <h3>{name}</h3>
          <div>{rating}</div>
          <h3>{price}$</h3>
        </div>
      </div>
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
  .home__product{
    margin:10px;
    width:100%;
    height:308px;
    ${styles.mixins.flex('row','flex-start','center',null)}
  }
  .home__product-image{
    overflow:hidden;
    min-width:200px;
    max-height:300px;
    img{
      width:100%;
    }
  }
  .home__product-details{
    margin-left:20px;
    h3{
      min-width:150px;
      font-size:${styles.fn.pxToRem(16)};
    }
    div{
      margin:10px 0px;
    }
  }
`

export default Product
