import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { styles } from '@/styles/styles'

const Footer = () => {
  return (
    <FooterStyle>
      <div className='footer'>
        <div className="footer__columns">
            <div className="footer__column">
              <h2>BRAND NAME</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
              <h3 className='footer__contact'>121 king street, Melbourne 3000</h3>
              <h3>+12 3 0000 0000</h3>
              <h3>contact@brandemail.com</h3>
              <div className="footer__icons">
                  <img src="/assets/icons/fb.png" alt="fb" />
                  <img src="/assets/icons/twitter.png" alt="twitter" />
                  <img src="/assets/icons/instagram.png" alt="instagram" />
                  <img src="/assets/icons/youtube.png" alt="youtube" />
              </div>
            </div>
            <div className="footer__column">
              <h3>SHOPPING</h3>
              <Link href="">Your cart</Link>
              <Link href="">Your orders</Link>
              <Link href="">Compared items</Link>
              <Link href="">Wishlist items</Link>
              <Link href="">Shipping detail </Link>
            </div>
            <div className="footer__column">
              <h3>MORE LINK</h3>
              <Link href="">Blog</Link>
              <Link href="">Gift Center</Link>
              <Link href="">Buying Guides</Link>
              <Link href="">New Arrivals</Link>
              <Link href="">Clearance</Link>
            </div>
            <div className="footer__column footer__promo-update">
              <h3>PROMO UPDATE</h3>
              <div className="footer__column-item">
                  <p><span>14</span><span>May</span></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>3 comments</p>
              </div>
              <div className="footer__column-item">
                  <p><span>15</span><span>July</span></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  <p>3 comments</p>
              </div>
            </div>
          </div>
          <div className="footer__foot">Brand Registered Name &copy; - All rights reserved </div>
      </div>
    </FooterStyle>
  )
}

const FooterStyle = styled.div`
  .footer{
    padding:50px 70px 10px;
    color:white;
    background-color:${styles.colors.black_rock};
    ${styles.mixins.breakpoint_down('small',`
      padding:50px 10px 10px;
    `)}
    h3{
      margin:5px 0px;
      font-size:${styles.fn.pxToRem(14)};
    }
    P{
      margin:5px 0px;
      color:grey;
    }
    .footer__columns{
      ${styles.mixins.flex('row','space-between','flex-start',null)}
      ${styles.mixins.breakpoint_down('small',`
        ${styles.mixins.flex('row','space-between','flex-start','wrap')}
      `)}
    }
    .footer__column{
      margin:0px 10px;
      width:20%;
      &:first-of-type{
        width:25%;
      }
      &:last-of-type{
        width:30%;
      }
      ${styles.mixins.breakpoint_down('small',`
        width:100% !important;
      `)} 
      a{
        display:block;
        min-width:fit-content;
        margin:10px 0px;
        color:white;
        &:hover{
          text-decoration:underline;
        }
      }
    }
    .footer__contact{
      margin-top:40px;
    }
    .footer__icons{
      margin-top:50px;
      img{
        margin-right:60px;
      }
    }
    .footer__promo-update{
      p:first-of-type{
        margin:10px 0px;
        color:white;
        font-weight:bold;
      }
    }
    .footer__column-item{
      padding:20px 0px;
    }
    .footer__column-item:first-of-type{
      border-bottom:1px solid grey;
    }
    .footer__foot{
      margin-top:50px;
      text-align:center;
    }
  }
`

export default Footer
