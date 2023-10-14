import { styles } from '@/styles/styles'
import React from 'react'
import styled from 'styled-components'

interface CarouselProps{
  products:any[]
}

const Carousel:React.FC<CarouselProps> = ({products}) => {
  return (
    <CarouselStyle>
      <div className='details__carousel'>
        <img src="/assets/icons/chevron-left.png" alt="left-chevron" />
        <div className="details__carousel-view-wrapper">
          <div className="details__carousel-view">
            {products.map((p:any)=>{
              return(
                <div key={p.id} className='details__carousel-product'>
                  <div className="details__carousel-product-img">
                    <div className="details__carousel-img-overlay">
                      <button>BUY NOW</button>
                    </div>
                    <img src={p.img} alt="product-image" />
                  </div>
                  <h3>{p.name}</h3>
                  <div className="details__carousel-product-colors">
                    {p.colors.map((c)=><div className='details__carousel-product-color' style={{backgroundColor:c}}></div>)}
                  </div>
                  <h3>{p.price}$</h3>
                </div>
              )
            })}
          </div>
        </div>
        <img src="/assets/icons/chevron-right.png" alt="right-chevron" />
      </div>
    </CarouselStyle>
  )
}

const CarouselStyle = styled.div`
  .details__carousel{
    margin:30px 0px;
    ${styles.mixins.flex('row','center','center',null)};
    h3{
      margin:10px 0px;
    }
    img{
      display:block;
      margin:0px 30px;
      cursor:poiter;
      width:20px;
      &:hover{
        opacity:0.6;
      }
    }
  }
  .details__carousel-view-wrapper{
    width:90%;
    overflow:hidden;
  }
  .details__carousel-view{
    ${styles.mixins.flex('row','center','flex-start',null)};
  }
  .details__carousel-product{
    cursor:pointer;
    margin:0px 20px;
    min-width:calc(100% / 4 - 40px);
    &:hover{
      .details__carousel-img-overlay{
        opacity:1;
      }
    }
  }
  .details__carousel-product-img{
    width:100%;
    height:300px;
    overflow:hidden;
    position:relative;
    top:0px;
    left:0px;
    img{
      margin:0px;
      width:120%;
    }
  }
  .details__carousel-img-overlay{
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0px;
    left:0px;
    background-color:rgba(0,0,0,0.6);
    transition:all 1s ease-in-out;
    ${styles.mixins.flex('row','center','center',null)};
  }
  ${styles.components.button_transparent}
`

export default Carousel
