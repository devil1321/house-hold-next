import { styles } from '@/styles/styles'
import React from 'react'
import styled from 'styled-components'

const ShopByRoom = () => {

  const handleMenu = (e:any) =>{
    const items = document.querySelectorAll('.products__shop-by-room-item span') as NodeListOf<HTMLSpanElement>
    if(!e.target.classList.contains('--menu-open')){
      items.forEach(i => {
        const menu = i.nextElementSibling as HTMLDivElement
        menu.style.display = 'none'
        const target = e.target.querySelector('.products__shop-by-room-menu') as HTMLDivElement
        target.style.display = 'block'
        e.target.classList.add('--menu-open')
      })
    }else{
      items.forEach(i => {
        const menu = i.nextElementSibling as HTMLDivElement
        menu.style.display = 'none'
        e.target.classList.remove('--menu-open')
      })
    }

  }

  return (
    <ShopByRoomStyle>
      <div className='products__shop-by-room'>
        <h3>Shop By Room</h3>
        <p className='products__shop-by-room-item' onClick={(e:any)=>handleMenu(e)}>
          <span>Bedroom</span>
          <div className="products__shop-by-room-menu">
            <p>Duvet cover sets</p>
            <p>Sheets</p>
            <p>Bedspreads & blankets</p>
            <p>Blankets</p>
            <p>Cutains</p>
            <p>Pillowcases</p>
            <p>Rugs</p>
          </div>
        </p>
        <p className='products__shop-by-room-item' onClick={(e:any)=>handleMenu(e)}>
          <span>Living room</span>
          <div className="products__shop-by-room-menu">
            <p>Duvet cover sets</p>
            <p>Sheets</p>
            <p>Bedspreads & blankets</p>
            <p>Blankets</p>
            <p>Cutains</p>
            <p>Pillowcases</p>
            <p>Rugs</p>
          </div>
        </p>
        <p className='products__shop-by-room-item' onClick={(e:any)=>handleMenu(e)}>
          <span>Child room</span>
          <div className="products__shop-by-room-menu">
            <p>Duvet cover sets</p>
            <p>Sheets</p>
            <p>Bedspreads & blankets</p>
            <p>Blankets</p>
            <p>Cutains</p>
            <p>Pillowcases</p>
            <p>Rugs</p>
          </div>
        </p>
        <p className='products__shop-by-room-item' onClick={(e:any)=>handleMenu(e)}>
          <span>Bathroom</span>
          <div className="products__shop-by-room-menu">
            <p>Duvet cover sets</p>
            <p>Sheets</p>
            <p>Bedspreads & blankets</p>
            <p>Blankets</p>
            <p>Cutains</p>
            <p>Pillowcases</p>
            <p>Rugs</p>
          </div>
        </p>
        <p className='products__shop-by-room-item' onClick={(e:any)=>handleMenu(e)}>
          <span>Outdoor</span>
          <div className="products__shop-by-room-menu">
            <p>Duvet cover sets</p>
            <p>Sheets</p>
            <p>Bedspreads & blankets</p>
            <p>Blankets</p>
            <p>Cutains</p>
            <p>Pillowcases</p>
            <p>Rugs</p>
          </div>
        </p>
      </div>
    </ShopByRoomStyle>
  )
}

const ShopByRoomStyle = styled.div`
  .products__shop-by-room-item{
    cursor:pointer;
    margin:10px 0px;
    &:hover{
      span{
        color:${styles.colors.smalt_blue};
      }
    }
    span{
      pointer-events:none;
      color:grey;
      font-weight:bold;
    }
  }
  .products__shop-by-room-menu{
    display:none;
    p{
      cursor:pointer;
      margin:10px 0px;
      &:hover{
        color:${styles.colors.smalt_blue};
      }
    }
  }
`

export default ShopByRoom
