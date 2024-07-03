import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import portlogo from '../assets/jb-high-resolution-logo-transparent.png'

function Navbar() {
  return (
    <nav className='fixed top-0 h-25 w-full flex justify-between items-center pt-4 sm:text-2xl sm:px-28 mb-10 font-space bg-[#023047] py-5 text-white'>
       <Link  to='/'> <img src={portlogo} alt="" className='h-14 w-26' /></Link>
      <div className='flex pr-5 gap-4 text-md sm:gap-10 sm:font-poppins'>
      <Link to='/'><motion.button whileHover={{scale:1.2,color:"orange"}} whileTap={{scale:1.2,color:"orange"}}>Home</motion.button></Link>
      <Link to='/projects'><motion.button whileHover={{scale:1.2,color:"orange"}} whileTap={{scale:1.2,color:"orange"}}>Projects</motion.button></Link>
      <Link to='/contact'><motion.button whileHover={{scale:1.2,color:"orange"}} whileTap={{scale:1.2,color:"orange"}}>Contact</motion.button></Link>
      </div>
    </nav>
  )
}

export default Navbar
