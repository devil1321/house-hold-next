import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__columns">
          <div className="footer__column">
            <h2>BRAND NAME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <h3>121 king street, Melbourne 3000</h3>
            <h3>+12 3 0000 0000</h3>
            <h3>contact@brandemail.com</h3>
            <div className="footer__icons">
                <Image src="" alt="" />
                <Image src="" alt="" />
                <Image src="" alt="" />
                <Image src="" alt="" />
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
          <div className="footer__column">
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
  )
}

export default Footer
