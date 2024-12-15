import React from 'react'
import './nav.css'
import { navs } from '@/data/data'
import Link from 'next/link'
import { HomeIcon } from 'lucide-react'
const Nav = () => {
  return (
    <nav className ="navbar" id='navbar'>
      <ul>
        {
          navs.map((navitem)=>(
            // render nav items through map
            <li key={navitem.id}>
              <Link href={navitem.link}>
                { navitem.name  === "Home" ? 
                  <>
                    <HomeIcon size={16}/>
                  </> : 
                  <>
                    {navitem.name}
                  </>
                  }
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default Nav