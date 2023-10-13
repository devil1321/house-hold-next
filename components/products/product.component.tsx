import { styles } from '@/styles/styles';
import React from 'react'
import styled from 'styled-components';

interface ProductProps{
  id:number;
  imgSrc:string;
  name:string;
  colors:string[];
  price:number;
}

const Product:React.FC<ProductProps> = ({id,imgSrc,name,colors,price}) => {
  return (
    <ProductStyle>
      <div className='products__product'>
        <div className="products__product-img">
          <img src={imgSrc} alt="product-image" />
        </div>
        <h3>{name}</h3>
        <div className="products__product-colors">
          {colors.map((c:string) => {
            if(c === 'brown'){
              return <div key={id} style={{backgroundColor:c}} className='products__product-color'></div>
            }
            if(c === 'yellow'){
              return <div key={id} style={{backgroundColor:c}} className='products__product-color'></div>
            }
            if(c === 'grey'){
              return <div key={id} style={{backgroundColor:c}} className='products__product-color'></div>
            }
          })}
        </div>
        <h3>{price}$</h3>
      </div>      
    </ProductStyle>
  )
}

const ProductStyle = styled.div`
  .products__product{
    margin:10px;
    h3{
      margin:10px 0px;
    }
  }
  .products__product-img{
     width:300px;
     height:350px;
     overflow:hidden;
     img{
      width:100%:
     }
  }
  .products__product-colors{
    ${styles.mixins.flex('row','flex-start','center',null)}
  }
  .products__product-color{
    margin-right:5px;
    width:10px;
    height:10px;
    border-radius:100%;
  }
`

export default Product
