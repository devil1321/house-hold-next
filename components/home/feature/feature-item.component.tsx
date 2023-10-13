import { styles } from '@/styles/styles';
import React from 'react'
import styled from 'styled-components';

interface FeatureItemProps{
  imgSrc:string;
  name:string;
  rating:number;
  price:number;
}

const FeatureItem:React.FC<FeatureItemProps> = ({imgSrc,name,rating,price}) => {
  return (
    <FeatureItemStyle>
      <div className='home__feature-item'>
        <div className="home__feature-item-img">
          <img src={imgSrc} alt="item-img" />
        </div>
        <div className="home__feature-item-details">
          <h3>{name}</h3>
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
  }
  .home__feature-item-img{
    height:84%;
    img{
      height:100%;
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
