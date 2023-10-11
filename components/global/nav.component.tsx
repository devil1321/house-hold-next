import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  return (
    <div className='nav'>
      <div className="nav__header">
        <div className="nav__logo">
            <Image src="" alt="" />
            <h1>Brand Name</h1>
        </div>
        <div className="nav__header-controls">
            <Image src="" alt="" />
            <Image src="" alt="" />
            <Image src="" alt="" />
        </div>
      </div>
      <div className="nav__navigation">
        <Link href="">HOME</Link>
        <Link href="">STORE</Link>
        <Link href="">ACCESSORIES</Link>
        <Link href="">BRAND</Link>
        <Link href="">PAGES</Link>
        <Link href="">ABOUT US</Link>
        <Link href="">NEWS</Link>
        <Link href="">CONTACT US</Link>
      </div>
    </div>
  )
}

export default Nav
