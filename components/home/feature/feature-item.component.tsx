import { styles } from '@/styles/styles';
import Link from 'next/link';
import React from 'react'
import styled from 'styled-components';

interface FeatureItemProps{
  redux:any;
  id:number;
  inCart:boolean;
  imgSrc:string;
  name:string;
  rating:number;
  price:number;
}

const FeatureItem:React.FC<FeatureItemProps> = ({redux,id,inCart,imgSrc,name,rating,price}) => {
  return (
    <FeatureItemStyle>
      <div className='home__feature-item'>
        <div className="home__feature-item-img">
          <div className="home__feature-overlay">
            {!inCart 
              ? <button onClick={()=>redux.shopActions.handleAddProduct(id,redux.cart,redux.products)}>BUY</button>
              : <button>IN CART</button>}
          </div>
          <img src={imgSrc} alt="item-img" />
        </div>
        <div className="home__feature-item-details">
          <Link href="/details/[id]" as={`/details/${id}`}>
            <h3>{name}</h3>
          </Link>
          <p>{rating}</p>
          <h3>{price}$</h3>
        </div>
      </div>
    </FeatureItemStyle>
  )
}

const FeatureItemStyle = styled.div`
  .home__feature-item{
    cursor:pointer;
    margin:20px 5px;
    width:calc(306px - 10px);
    height:566px;
    overflow:hidden;
    &:hover{
      .home__feature-overlay{
        opacity:1;
      }
    }
    h3{
      cursor:pointer;
    }
  }
  .home__feature-item-img{
    position:relative;
    top:0px;
    left:0px;
    height:84%;
    img{
      height:100%;
    }
  }
  .home__feature-overlay{
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    opacity:0;
    background-color:rgba(0,0,0,0.6);
    transition:all 1s ease-in-out;
    ${styles.mixins.flex('row','center','center',null)}
    ${styles.components.button_transparent}
    button{
      padding:10px 30px;
    }
  }
  .home__feature-item-details{
    h3{
      margin:10px 0px;
      font-size:${styles.fn.pxToRem(16)};
    }
    p{
      margin:10px 0px;
    }
  }
`

export default FeatureItem
