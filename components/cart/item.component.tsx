import useQuantity from '@/hooks/useQuantity';
import { styles } from '@/styles/styles';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

interface ItemProps{
  redux:any;
  product:any;
}

const Item:React.FC<ItemProps> = ({redux,product}) => {

  const [array,setArray] = useState<number[]>([])
  const [isMenu,setIsMenu] = useState<boolean>(false)
  const [update,setUpdate] = useState<boolean>(false)
  const [quantity,setQuantity] = useQuantity(product?.id,update)
  

  const handleArray = () =>{
    const numbersArray = [];
    if(array.length === 0){
      for (let i = 0; i <= 10; i++) {
        numbersArray.push(i);
      }
      setArray(numbersArray)
    }
  }

  useEffect(()=>{
    handleArray()
  },[])

  return (
    <ItemStyle>
      <div className='cart__item'>
        <div className='cart__item-cross' onClick={()=>{
            redux.shopActions.handleRemove(product?.id,redux.cart,redux.products)
            redux.shopActions.handleSummary(redux.cart)
          }}>
          <span></span>
          <span></span>
        </div>
        <div className="cart__item-img">
          <img src={product?.img} alt="product-image" />
        </div>
        <div className="cart__item-details">
          <h3>{product?.name}</h3>
          <h3>{product?.price}$</h3>
          <p>
            <span>Art. No.:54637253</span>
            <span>Size::21*45</span>
          </p>
          <p>
            <span>Color:Mint</span>
            <span>Total:39.99</span>
          </p>
          <div className="cart__item-select">
            <div className="cart__item-select-boxes">
              <div className="cart__item-heart">
                <img src="/assets/icons/heart.png" alt="heart-image" />
              </div>
              <div className="cart__item-select-box" onClick={()=>setIsMenu(!isMenu)}>{quantity as number}</div>
            </div>
              {isMenu && 
                <div className="cart__item-quantity-menu">
                  {array.map((i:number) => 
                    <div key={i} data-value={i} onClick={()=>{
                      redux.shopActions.handleCartQuantity(product?.id,redux.cart,redux.products,i)
                      setIsMenu(false)
                      setUpdate(!update)
                    }}>{i}</div>)}
                </div>}
          </div>
        </div>
      </div>
    </ItemStyle>
  )
}

const ItemStyle = styled.div`
  .cart__item{
    position:relative;
    top:0px;
    left:0px;
    margin-bottom:20px;
    ${styles.mixins.flex('row','flex-start','center',null)}
    h3,p{
      margin:10px 0px;
    }
    p{
      span{
        margin-right:10px;
      }
    }
  }
  .cart__item-cross{
    cursor:pointer;
    position:absolute;
    right:0px;
    top:0px;
    span{
      display:block;
      width:30px;
      border:1px solid black;b
      border-radius:100%;
      overflow:hidden;
      transform-origin:17px 1px;
      &:first-of-type{
        transform:rotate(-45deg);
      }
      &:last-of-type{
        transform:rotate(45deg);
      }
    }
  }
  .cart__item-img{
    overflow:hidden;
    width:200px;
    height:300px;
    img{
      width:100%;
    }
  } 
  .cart__item-details{
    margin-left:20px;
  }
  .cart__item-select{
    position:relative;
    top:0px;
    left:0px;
  }
  .cart__item-select-boxes{
    margin:10px 0px;
    ${styles.mixins.flex('row','flex-start','center',null)}
    div{
      width:10%;
      padding:5px;
      height:30px;
      border:2px solid lightgrey;
      ${styles.mixins.flex('row','center','center',null)}
    }
    div:last-of-type{
      width:40%;
      margin-left:10px;
    }
  }
  .cart__item-quantity-menu{
      position:absolute;
      top:50px;
      left:51px;
      width:44%;
      z-index:2;
      border:2px solid lightgrey;
      background-color:white;
      ${styles.mixins.flex('column','center','center',null)}
      div{
        cursor:pointer;
        text-align:center;
        width:90%;
        margin:2px 0px;
        padding:5px;
        background-color:#f1f1f1;
        &:hover{
          background-color:lightgrey;
        }
      }
  }
`

export default Item
