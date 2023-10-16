import React from 'react'
import { styles } from '@/styles/styles';
import styled from 'styled-components';

interface InnerItemProps{
    text:string;
    imgSrc:string;
}

const InnerItem:React.FC<InnerItemProps> = ({text,imgSrc}) => {
  return (
    <InnerItemStyle>
      <div className='home__inner-item'>
        <div className="home__inner-item-img">
          <img src={imgSrc} alt="item" />
        </div>
        <div className="home__inner-item-details">
          <h3>{text}</h3>
          <button>VIEW DETAILS</button>
        </div>
      </div>
    </InnerItemStyle>
  )
}

const InnerItemStyle = styled.div`
  .home__inner-item{
    width:100%;
    ${styles.mixins.flex('row','space-between','center',null)};
  }
  .home__inner-item-img{
    ${styles.mixins.breakpoint_down('small',`
      width:150px;
    `)}
    img{
      width:100%;
    }
  }
  .home__inner-item-details{
    margin-left:30px;
    h2{
      font-size:${styles.fn.pxToRem(30)};
    }
    button{
      margin-top:20px;
      min-width:fit-content;
    }
    ${styles.components.button_with_border}
  }
`

export default InnerItem
