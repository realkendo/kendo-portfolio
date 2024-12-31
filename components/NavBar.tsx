'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'


// nav link objects
const navLinks = [
  { title: "About", path: "#about" },
  { title: "Portfolio", path: "#portfolio" },
  { title: "Stack", path: "#stack" },
  { title: "Contact", path: "#contact" },
]


export const NavBar = () => {
  // initiallizing state for mobile menu
  const [nav, setNav] = useState(false);

  // toggle mobile menu function
  const toggleNav = () => {
    setNav(!nav)
  }

  // close mobile menu function
  const closeNav = () => {
    setNav(false)
  }

  return(
    <div className='z-50 fixed flex justify-center w-full text-white font-bold'>
      <div className='border border-white/20 mt-8 backdrop-blur-3xl rounded-3xl hidden md:flex items-center justify-center p-2 max-w-[400px] mx-auto'>
        <ul className='flex flex-row p-2 space-x-8'>
          { navLinks.map((link, index) => (
            <li key={index}>
              <Link href={link.path} className='transform hover:text-white/50 translate-all duration-300 ease-in-out'>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}