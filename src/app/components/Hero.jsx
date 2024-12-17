'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', updateMousePosition)
    return () => window.removeEventListener('mousemove', updateMousePosition)
  }, [])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500"
        animate={{
          backgroundPosition: `${mousePosition.x / 5}px ${mousePosition.y / 5}px`
        }}
      />
      <div className="relative z-10 text-center">
        <motion.h1 
          className="text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Kenneth Istifanus
        </motion.h1>
        <motion.p 
          className="text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Web Developer & Engineer 
        </motion.p>
      </div>
    </section>
  )
}
