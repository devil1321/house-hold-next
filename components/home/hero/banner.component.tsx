import React from 'react'
import { styles } from '@/styles/styles'
import styled from 'styled-components'

const Banner = () => {
  return (
    <BannerStyle>
      <div className='home__banner'>
        <div className="home__banner-img">
          <img src="/assets/home/hero.png" alt="chair" />
        </div>
        <div className="home__banner-text">
          <h3>HOT DEALS THIS WEEK</h3>
          <h2>SALE 50% OFF MODERN FURNITURE</h2>
          <button>VIEW NOW</button>
        </div>
        <div className="home__dots">
          <div className="home__dot"></div>
          <div className="home__dot"></div>
          <div className="home__dot active"></div>
          <div className="home__dot"></div>
          <div className="home__dot"></div>
        </div>
      </div>
    </BannerStyle>
  )
}

const BannerStyle = styled.div`
  .home__banner{
    ${styles.mixins.flex('row','space-between','center','wrap')}
    background-color:${styles.colors.goldenrod};
  }
  .home__banner-img{
    width:50%;
  }
  .home__banner-text{
    width:50%;
    h3{
      color:#323334;
    }
    h2{
      position:relative;
      left:-5%;
      top:0px;
      width:80%;
      color:#A86A3D;
      text-align:center;
      font-size:${styles.fn.pxToRem(40)};
    }
    button{
      margin-top:30px;
    }
    ${styles.components.button_with_border}
  }
  .home__dots{
    width:100%;
  }
`

export default Banner
