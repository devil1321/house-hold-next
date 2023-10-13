import { styles } from '@/styles/styles';
import React from 'react'
import styled from 'styled-components';

interface BannerProps{
  imgSrc:string;
  heading:string;
  subHeading:string;
  footer:string;
}

const Banner:React.FC<BannerProps> = ({imgSrc,heading,subHeading,footer}) => {
  return (
    <BannerStyle>
      <div className='products__banner'>
        <img src={imgSrc} alt="banner" />
        <div className="products__banner-text">
          <h1>{heading}</h1>
          <h2>{subHeading}</h2>
          <h3>{footer}</h3>
        </div>
      </div>
    </BannerStyle>
  )
}

const BannerStyle = styled.div`
  .products__banner{
    position:relative;
    top:0px;
    left:0px;
  }
  .products__banner-text{
    width:100%;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    h1,h2,h3{
      text-align:center;
    }
    h2{
      margin-top:20px;
      min-width:100%;
    }
    h3{
      margin-top:40px;
      font-size:${styles.fn.pxToRem(12)};
    }
  }
`

export default Banner
