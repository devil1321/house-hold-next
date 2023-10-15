import React from 'react'
import styled from 'styled-components';
import { styles } from '@/styles/styles';

interface FeatureMainItemProps{
    index:number;
    imgSrc:string;
    heading:string;
    text:string;
}

const FeatureMainItem:React.FC<FeatureMainItemProps> = ({imgSrc,heading,text}) => {
  return (
    <FeatureMainItemStyle>
      <div className='home__feature-main-item'>
        <div className="home__feature-main-item-img">
          <img src={imgSrc} alt="image" />
        </div>
        <div className="home__feature-main-item-overlay">
          <h3>{heading}</h3>
          <p>{text}</p>
          <button>VIEW ALL</button>
        </div>
      </div>
    </FeatureMainItemStyle>
  )
}

const FeatureMainItemStyle = styled.div`
  .home__feature-main-item{
    cursor:pointer;
    margin:20px 5px;
    width:calc(306px - 10px);
    height:566px;
    cursor:pointer;
    position:relative;
    top:0px;
    left:0px;
    overflow:hidden;
    img{
      width:103%;
    }
  }
  .home__feature-main-item-overlay{
    position:absolute;
    top:0px;
    left:0px;
    height:84%;
    background-color:rgba(0,0,0,0.6);
    box-sizing:border-box;
    padding:0px 30px;
    ${styles.mixins.flex('column','center','flex-start',null)}
    h3{
      font-size:${styles.fn.pxToRem(20)};
      color:white;
    }
    p{
      margin:30px 0px;
      color:white;
    }
    &:first-of-type{
      ${styles.components.button_with_border}
    }
    &:last-of-type{
      ${styles.components.button_transparent}
    }
  }
`

export default FeatureMainItem
