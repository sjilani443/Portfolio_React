import React from 'react'
import { Link } from 'react-router-dom'
import portlogo from '../assets/jb-high-resolution-logo-transparent.png'

function Navbar() {
  return (
    <nav className='h-20 w-full flex  sm:justify-between items-center pt-4 sm:text-2xl sm:px-28 mb-10 font-space'>
       <Link  to='/'> <img src={portlogo} alt="" className='h-20' /></Link>
      <div className='flex lg:ml-14 gap-4 text-md font-bold sm:gap-10 sm:font-normal'>
      <Link to='/'><button>Home</button></Link>
      <Link to='/projects'><button>Projects</button></Link>
      <Link to='/contact'><button>Contact</button></Link>
      </div>
    </nav>
  )
}

export default Navbar
