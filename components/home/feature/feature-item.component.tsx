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
    width:306px;
    height:566px;
  }
  .home__feature-item-img{
    img{
      width:100%;
    }
  }
  .home__feature-item-details{
    h3{
      font-size:${styles.fn.pxToRem(20)};
    }
    p{
      margin:10px 0px;
    }
  }
`

export default FeatureItem
