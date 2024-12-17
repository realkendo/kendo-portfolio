'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const projects = [
  { id: 1, title: 'E-commerce Platform', category: 'Web Development', image: '/placeholder.svg' },
  { id: 2, title: 'Mobile Banking App', category: 'Mobile Development', image: '/placeholder.svg' },
  { id: 3, title: 'AI-powered Chatbot', category: 'Machine Learning', image: '/placeholder.svg' },
  { id: 4, title: 'Social Media Dashboard', category: 'Web Development', image: '/placeholder.svg' },
  { id: 5, title: 'Fitness Tracking App', category: 'Mobile Development', image: '/placeholder.svg' },
  { id: 6, title: 'Data Visualization Tool', category: 'Data Science', image: '/placeholder.svg' },
]

const categories = ['All', 'Web Development', 'Mobile Development', 'Machine Learning', 'Data Science']

export default function Projects() {
  const [filter, setFilter] = useState('All')

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
        <div className="flex justify-center mb-8">
          {categories.map(category => (
            <button
              key={category}
              className={`mx-2 px-4 py-2 rounded ${filter === category ? 'bg-blue-600' : 'bg-gray-700'}`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-700 rounded-lg overflow-hidden"
              >
                <Image src={project.image} alt={project.title} width={400} height={200} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400">{project.category}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

