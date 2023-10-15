import { styles } from '@/styles/styles';
import React, { useState } from 'react'
import styled from 'styled-components';

interface DetailsProps{
  product:any;
  redux:any;
}

const Details:React.FC<DetailsProps> = ({redux,product}) => {

  const [isMenu,setIsMenu] = useState<boolean>(false)

  return (
    <DetailsStyle className='details__details-wrapper'>
      <div className='details__details'>
        <h3>{product?.name}</h3>
        <h3>{product?.price}$</h3>
        <p>Light khaki green/white checks</p>
        <div className="details__details-icon-img">
          <img src={product?.img} alt="icon-image" />
        </div>
        <div className="details__details-p-with-icon">
          <img src="/assets/icons/location.png" alt="location" />
          <span>Not available in stores</span>
        </div>
        <div className="details__details-select" onClick={()=>setIsMenu(!isMenu)}>
          <h3>Select Size</h3>
          <img src="/assets/icons/chevron-down.png" alt="chevron" />
        </div>
        {isMenu && 
          <div className="details__details-options">
            <h3 onClick={()=>setIsMenu(false)}>XS</h3>
            <h3 onClick={()=>setIsMenu(false)}>SM</h3>
            <h3 onClick={()=>setIsMenu(false)}>MD</h3>
            <h3 onClick={()=>setIsMenu(false)}>LG</h3>
          </div>}
          {!product?.inCart
            ? <button onClick={()=>redux.shopActions.handleAddProduct(product.id,redux.cart,redux.products)}>ADD TO CART</button>
            : <button>IN CART</button>
          }
      </div>
    </DetailsStyle>
  )
}

const DetailsStyle = styled.div`
  .details__details{
    padding:0px 30px;
    h3{
      margin:10px 0px;
    }
  }
  .details__details-icon-img{
    margin:10px 0px;
    width:50px;
    height:100px;
    img{
      height:100%;
    }
  }
  .details__details-p-with-icon{
    img{
      margin-right:5px;
    }
    ${styles.mixins.flex('row','flex-start','center',null)}
  }
  .details__details-select{
    margin:10px 0px;
    width:300px;
    padding:0px 5px;
    border:2px solid lightgrey;
    ${styles.mixins.flex('row','space-between','center',null)}
  }
  .details__details-options{
    margin:10px 0px;
    width:300px;
    padding:0px 5px;
    border:2px solid lightgrey;
    h3{
      cursor:pointer;
      padding:5px;
      &:hover{
        background-color:lightgrey;
      }
    }
  }
  ${styles.components.button}
  button{
    width:312px;
  }
`

export default Details
