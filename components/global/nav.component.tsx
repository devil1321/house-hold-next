import React, { MutableRefObject, useRef } from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { styles } from '../../styles/styles';

const Nav = () => {

  const menuRef = useRef() as MutableRefObject<HTMLDivElement>

  const handleMenu = () =>{
    if(!menuRef.current.classList.contains("--menu-open")){
      menuRef.current.classList.add('--menu-open')
      menuRef.current.style.display = 'block'
    }else{
      menuRef.current.classList.remove('--menu-open')
      menuRef.current.style.display = 'none'
    }
  }

  return (
    <NavStyle>
      <div className='nav'>
        <div className="nav__header">
          <div className="nav__logo">
              <img src="/assets/icons/logo.png" alt="logo" />
              <h1>Brand Name</h1>
          </div>
          <div className="nav__header-controls">
              <img src="/assets/icons/profile.png" alt="profile" />
              <Link href="/cart">
                <img src="/assets/icons/cart.png" alt="cart" />
              </Link>
              <img src="/assets/icons/hamburger.png" alt="hamburger" onClick={()=>handleMenu()}/>
          </div>
        </div>
        <div className="nav__items">
          <Link href="/">HOME</Link>
          <Link href="/products">STORE</Link>
          <Link href="/products">ACCESSORIES</Link>
          <Link href="/products">BRAND</Link>
          <Link href="/products">PAGES</Link>
          <Link href="/products">ABOUT US</Link>
          <Link href="/products">NEWS</Link>
          <Link href="/products">CONTACT US</Link>
          <div className="nav__menu" ref={menuRef}>
                <Link href="/products" onClick={()=>handleMenu()}>Product Type</Link>
                <Link href="/products" onClick={()=>handleMenu()}>Favoruites</Link>
                <Link href="/products" onClick={()=>handleMenu()}>Size</Link>
                <Link href="/products" onClick={()=>handleMenu()}>Color</Link>
                <Link href="/products" onClick={()=>handleMenu()}>Concept</Link>
                <Link href="/products" onClick={()=>handleMenu()}>Collection</Link>
                <Link href="/products" onClick={()=>handleMenu()}>Quality</Link>
                <div className="nav__menu-buttons">
                  <button onClick={()=>handleMenu()}>CLEAR ALL</button>
                  <button onClick={()=>handleMenu()}>DONE</button>
                </div>
              </div>
        </div>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.div`
  .nav{
    padding:0px 20px;
  }
  .nav__header{
    ${styles.mixins.flex('row','space-between','center',null)}
  }
  .nav__logo{
    width:fit-content;
    ${styles.mixins.flex('row','space-between','center',null)}
    h1{
      margin-left:10px;
    }
  }
  .nav__header-controls{
    ${styles.mixins.flex('row','space-between','center',null)}
    width:10%;
  }
  .nav__items{
    position:relative;
    top:0px;
    left:0px;
    width:85%;
    padding:5px 0px;
    margin:0px auto;
    border-top:1px solid black;
    border-bottom:1px solid black;
    text-align:center;
    ${styles.mixins.breakpoint_down('small',`
      a{
        display:none;
       }
       border:0px;
    `)}
    a{
      margin:0px 30px;
      &:hover{
        color:${styles.colors.smalt_blue};
      }
    }
  }
  .nav__menu{
    z-index:10;
    width:100%;
    position:absolute;
    top:50px;
    left:50%;
    transform:translateX(-50%);
    background-color:white;
    display:none;
    border:1px solid lightgrey;
    border-radius:5px;
    ${styles.mixins.breakpoint_down('small',`
      top:0px;
      width:130%;
      transform:translateX(-42%);
    `)}
    a{
      display:block;
      margin:0px 5px;
      padding:5px;
      border-radius:5px;
      &:hover{
        color:white;
        background-color:${styles.colors.smalt_blue};
      }
    }
    button{
      width:150px;
      padding:10px 20px;
      margin:5px;
      border:1px solid black;
      outline:none;
      &:focus,&:active{
        border:0px;
        outline:none;
      }
    }
    button:first-of-type{
      background-color:white;
    }
    button:last-of-type{
      color:white;
      background-color:${styles.colors.smalt_blue};
    }
  }
  .nav__menu-buttons{
    margin:10px 0px;
  }
`

export default Nav

