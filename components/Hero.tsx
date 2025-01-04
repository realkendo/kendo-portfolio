'use client'

import { useEffect } from 'react';
import { animate, useMotionValue, useMotionTemplate, motion } from 'framer-motion';
import obj from '@assets/globe.svg'
import Image from 'next/image';

const COLORS_TOP = ['#13FFAA', '#1E67C6', '#CE84CF', '#DD335C']

export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: 'easeInOut',
      duration: 5,
      repeat: Infinity,
      repeatType: 'mirror'
    })
  }, [])

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`
  const border = useMotionTemplate`1px solid ${color}`
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`
  return(
    <>
      <motion.section style={{backgroundImage}} className='relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200'>
        <div className='z-10 flex flex-col items-center'>
          <span className='mb-1.5 inline-block rounded-full bg-gray-600/20 px-3 py-1.5 text-sm'>
            OPEN FOR DEALS
          </span>
          <h1 className='text-white/40 text-7xl font-blck'> Hello, I am</h1>
          <h1 className='max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl'>
            k3nd0
          </h1>
          <Image 
            src={'/myPhoto.png'}
            alt='Profile Pic'
            width={250}
            height={250}
          />
        </div>
      </motion.section>       
    </>
  )
}


