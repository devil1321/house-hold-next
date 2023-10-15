import { styles } from '@/styles/styles';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

interface ProductProps{
  redux:any;
  id:number;
  imgSrc:string;
  inCart:boolean;
  name:string;
  colors:string[];
  price:number;
}

const Product:React.FC<ProductProps> = ({redux,id,inCart,imgSrc,name,colors,price}) => {
  return (
    <ProductStyle>
      <div className='products__product'>
        <div className="products__product-img">
          <div className="products__product-overlay">
            {!inCart 
              ? <button onClick={()=>redux.shopActions.handleAddProduct(id,redux.cart,redux.products)}>ADD TO CART</button>
              : <button>IN CART</button>
            }
          </div>
          <img src={imgSrc} alt="product-image" />
        </div>
        <Link href="/details/[id]" as={`/details/${id}`}>
          <h3>{name}</h3>
        </Link>  
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
    cursor:pointer;
    margin:10px;
    h3{
      cursor:pointer;
      margin:10px 0px;
    }
  }
  .products__product-img{
     position:relative;
     top:0px;
     left:0px;
     width:300px;
     height:350px;
     overflow:hidden;
     &:hover{
      .products__product-overlay{
        opacity:1;
      }
     }
     img{
      width:100%:
     }
  }
  .products__product-overlay{
    opacity:0;
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6);
    transition:all 1s ease-in-out;
    ${styles.mixins.flex('row','center','center',null)}
    ${styles.components.button_transparent}
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
