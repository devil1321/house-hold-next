import { styles } from '@/styles/styles'
import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

interface CarouselProps{
  title:string;
  products:any[]
}

const Carousel:React.FC<CarouselProps> = ({title,products}) => {
  const [move,setMove] = useState<number>()
  const [count,setCount] = useState<number>(1);

  const viewRef = useRef() as MutableRefObject<HTMLDivElement>
  const itemRef = useRef() as MutableRefObject<HTMLDivElement>

  const handlePrev = () =>{
    setCount(count - 1)
    if(count < 2){
      setCount(26)
    }
  }
  const handleNext = () =>{
    setCount(count + 1)
    if(count > 25){
      setCount(1)
    }
  }
  const handleMove = () =>{
    viewRef.current.style.transform = `translateX(-${(itemRef.current?.clientWidth + 40) * count}px)`
  }


  useEffect(()=>{
    handleMove()
  },[count])

  return (
    <CarouselStyle>
      <h3>{title}</h3>
      <div className='details__carousel'>
        <img src="/assets/icons/chevron-left.png" alt="left-chevron" onClick={()=>handlePrev()}/>
        <div className="details__carousel-view-wrapper">
          <div ref={viewRef} className="details__carousel-view">
            {products.map((p:any)=>{
              return(
                <div ref={itemRef} key={p.id} className='details__carousel-product'>
                  <div className="details__carousel-product-img">
                    <div className="details__carousel-img-overlay">
                      <button>BUY NOW</button>
                    </div>
                    <img src={p.img} alt="product-image" />
                  </div>
                  <h3>{p.name}</h3>
                  <div className="details__carousel-product-colors">
                    {p.colors.map((c:any)=><div key={c} className='details__carousel-product-color' style={{backgroundColor:c}}></div>)}
                  </div>
                  <h3>{p.price}$</h3>
                </div>
              )
            })}
          </div>
        </div>
        <img src="/assets/icons/chevron-right.png" alt="right-chevron" onClick={()=>handleNext()}/>
      </div>
    </CarouselStyle>
  )
}

const CarouselStyle = styled.div`
  h3:first-of-type{
    margin-top:30px;
  }
  .details__carousel{
    margin:30px 0px;
    ${styles.mixins.flex('row','center','center',null)};
    h3{
      margin:10px 0px;
    }
    img{
      cursor:pointer;
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
    transition:all 1s ease-in-out;
    ${styles.mixins.flex('row','flex-start','flex-start',null)};
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
