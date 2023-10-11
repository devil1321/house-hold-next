import React from 'react'
import Link from 'next/link'
import styled from 'styled-components';
import { styles } from '../../styles/styles';

const Nav = () => {
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
              <img src="/assets/icons/cart.png" alt="cart" />
              <img src="/assets/icons/hamburger.png" alt="hamburger" />
          </div>
        </div>
        <div className="nav__items">
          <Link href="#">HOME</Link>
          <Link href="#">STORE</Link>
          <Link href="#">ACCESSORIES</Link>
          <Link href="#">BRAND</Link>
          <Link href="#">PAGES</Link>
          <Link href="#">ABOUT US</Link>
          <Link href="#">NEWS</Link>
          <Link href="#">CONTACT US</Link>
        </div>
      </div>
    </NavStyle>
  )
}

const NavStyle = styled.div`
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
    width:80%;
    padding:5px 0px;
    margin:0px auto;
    border-top:1px solid black;
    border-bottom:1px solid black;
    text-align:center;
    a{
      margin:0px 10px;
      &:hover{
        color:${styles.colors.smalt_blue};
      }
    }
  }
`

export default Nav

