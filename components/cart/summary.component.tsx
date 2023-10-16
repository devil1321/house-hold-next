import { styles } from '@/styles/styles';
import React, { useEffect } from 'react'
import styled from 'styled-components';

interface SummaryProps{
  summary:number;
}

const Summary:React.FC<SummaryProps> = ({summary}) => {
  return (
    <SummaryStyle className='cart__summary-wrapper'>
      <div className='cart__summary'>
        <p>Add A DISCOUNT CODE</p>
        <form action="">
          <div className="cart__summary-field">
            <input type="text" />
            <button>ADD</button>
          </div>
        </form>
        <div className="cart__summary-detail">
          <h3>Order value:</h3>
          <h3>{summary ? summary : 0}$</h3>
        </div>
        <div className="cart__summary-detail">
          <h3>Shipping:</h3>
          <h3>0$</h3>
        </div>
        <div className="cart__summary-detail">
          <h3>Total</h3>
          <h3>{summary ? summary : 0}$</h3>
        </div>
        <button className='cart__summary-checkout'>CONTINUE TO CHEKCOUT</button>
      </div>
    </SummaryStyle>
  )
}

const SummaryStyle = styled.div`
  .cart__summary{
    position:relative;
    top:-20px;
    left:0px;
    padding:20px;
    background-color:#ECEBE9;
    ${styles.mixins.breakpoint_down('small',`margin-top:30px`)}
    p{
      text-align:center;
    }
    h3{
      margin:5px 0px;
      font-size:${styles.fn.pxToRem(14)};
    }
  }
  .cart__summary-field{
    margin:10px 0px;
    border:2px solid lightgrey;
    ${styles.mixins.flex('row','space-between','center',null)};
    input{
      height:30px;
      background:transparent;
      width:70%;
      border:0px;
      outline:none;
      &:focus,&:active{
        border:0px;
        outline:none;
      }
    }
    
  }
  .cart__summary-detail{
    ${styles.mixins.flex('row','space-between','center',null)};
  }
  ${styles.components.button}
  .cart__summary-checkout{
    margin:10px 0px;
    width:100%;
  }
`

export default Summary
