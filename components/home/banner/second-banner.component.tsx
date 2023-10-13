import { styles } from '@/styles/styles';
import React from 'react'
import styled from 'styled-components';

interface SecondBannerProps{
  imgSrc:string;
  heading:string;
  price:number;
  text:string;
}

const SecondBanner:React.FC<SecondBannerProps> = ({imgSrc,heading,price,text}) => {
  return (
    <SecondBannerStyle>
      <div className='home__second-banner'>
        <img src={imgSrc} alt="image" />
        <div className="home__second-banner-details">
          <h2>{heading}</h2>
          <h2>{price}$ <span className='home__second-banner-stroke'>222$</span></h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, voluptate!</p>
          <button>VIEW DETAILS</button>
        </div>
      </div>
    </SecondBannerStyle>
  )
}

const SecondBannerStyle = styled.div`
  .home__second-banner{
    position:relative;
    top:0px;
    left:0px;
    img{
      width:100%;
    }
  }
  .home__second-banner-details{
    opacity:0.7;
    width:30%;
    padding:40px 20px;
    position:absolute;
    top:20%;
    left:10%;
    background-color:${styles.colors.goldenrod};
    h2:first-of-type{
      color:#323334;
      margin:10px 0px;
    }
    h2:last-of-type{
      color:#7B5136;
      margin:10px 0px;
      span{
        text-decoration: line-through;
      }
    }
    p{
      margin:10px 0px;
      width:70%;
      color:323334;
    }
    button{
      margin-top:10px;
    }
    ${styles.components.button_with_border}
  }
`

export default SecondBanner
