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
          <div className="home__product-overlay">
            <button>BUY</button>
          </div>
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
    cursor:pointer;
    margin:10px;
    width:100%;
    height:308px;
    ${styles.mixins.flex('row','flex-start','center',null)}
    &:hover{
      .home__product-overlay{
        opacity:1;
      }
    }
  }
  .home__product-image{
    overflow:hidden;
    min-width:200px;
    max-height:300px;
    position:relative;
    top:0px;
    left:0px;
    img{
      width:100%;
    }
    
  }
  .home__product-overlay{
    position:absolute;
    top:0px;
    left:0px;
    min-width:200px;
    min-height:300px;
    opacity:0;
    background-color:rgba(0,0,0,0.6);
    transition:all 1s ease-in-out;
    ${styles.mixins.flex('row','center','center',null)}
    ${styles.components.button_transparent}
    button{
      width:100px;
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
