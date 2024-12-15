'use client'
import React , {useCallback, useState} from 'react'
import "./header.css"
import Link from 'next/link'
import Nav from './Nav'
import Social from './Social'
import SearchForm from './SearchForm'
import { AlignJustify, Search, X } from 'lucide-react'
// import Image from 'next/image'
const Header = () => {
  const[active , setActive] = useState(false)
  const [on , setOn] = useState(false)
  const handleFormOpen = useCallback(
    (e: React.MouseEvent<SVGSVGElement>)=>{
      e.preventDefault()
      setActive(!active)
    },[active])
    
    const handleToggleMenu = () => {
      setOn(!on)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const  body : HTMLElement | any = document.querySelector('body')
    body.classList.toggle('mobile-nav-active')
  }
  
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
            <Search className='js-search-open mx-2 ' onClick={handleFormOpen} />
              {
                on ? (<>
                  <X className='mobile-nav-toggle' onClick={handleToggleMenu}/>
                </>) : (
                 <>
                  <AlignJustify className='mobile-nav-toggle' onClick={handleToggleMenu}/>
                 </> 
                )
              }


            <SearchForm active={active} formOpen={handleFormOpen}/>
        </div>
          
          
      </div>
    </header>
  )
}

export default Header