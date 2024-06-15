import React from 'react'
import { Link } from 'react-router-dom'
import portlogo from '../assets/jb-high-resolution-logo-transparent.png'

function Navbar() {
  return (
    <nav className='h-20 w-full flex gap-1 sm:justify-between items-center pt-4 sm:text-2xl sm:px-28 mb-10 font-space'>
       <Link  to='/'> <img src={portlogo} alt="" className='h-20' /></Link>
      <div className='flex gap-[3rem]'>
      <Link to='/'><button>Home</button></Link>
      <Link to='/projects'><button>Projects</button></Link>
      <Link to='/contact'><button>Contact</button></Link>
      </div>
    </nav>
  )
}

export default Navbar
