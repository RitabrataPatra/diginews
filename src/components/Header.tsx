'use client'
import React , {useState} from 'react'
import "./header.css"
import Link from 'next/link'
import Nav from './Nav'
import Social from './Social'
// import Image from 'next/image'
const Header = () => {

  return (
    <header id='header' className='header d-flex align-items-center fixed-top'>
      <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
        <Link href="/" className="logo d-flex align align-items-center">
          {/* <Image src={}/> */}
          <h1 >DigiNews</h1>
          
        </Link>
        <Nav/>
        <div className='position-relative'>
            <Social/>
        </div>
      </div>
    </header>
  )
}

export default Header