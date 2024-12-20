'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const skills = [
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'JavaScript', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'CSS/SASS', level: 85 },
  { name: 'GraphQL', level: 70 },
]


export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg"
              whileHover={{ scale: 1.05 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
            >
              <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <motion.div
                  className="bg-blue-600 h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                />
              </div>
              {hoveredSkill === skill.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-2 text-sm text-gray-400"
                >
                  {skill.level}% proficiency
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
