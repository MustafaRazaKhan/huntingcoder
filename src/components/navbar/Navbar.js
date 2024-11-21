import React from 'react'
import "./navbar.css"
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='nav'>
       
        <ul>
<li><Link href="/">Home</Link></li>           
<li><Link href="/about">About</Link></li>           
<li><Link href="/">Contact</Link></li>           
<li><Link href="/">Blog</Link></li>           
        </ul>
    </nav>
  )
}

export default Navbar