"use client"

import React from 'react';
import { motion, useInView } from 'framer-motion'

const metrics = [
  {
    id: 1,
    value: '5+',
    label: 'Years of Experience',
    description: 'Dedicated to honing my skills in software development.'
  },
  {
    id: 2,
    value: '50+',
    label: 'Projects Completed',
    description: 'From small solo projects to large-scale applications in a team.'
  },
  {
    id: 3,
    value: '10+',
    label: 'Technologies Mastered',
    description: 'Proficiency in various programming languages with their respective frameworks and tools.'
  },
  {
    id: 4,
    value: '80%',
    label: 'Code Quality',
    description: 'Committed to writing clea, efficeint and maintainable code.'
  },
  {
    id: 5,
    value: '500+',
    label: 'Github Contributions',
    description: 'Active contributor to open-source, business and personal projects, both public and private'
  }
]

export const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, {once: false});

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity : 0, y: 50}}
      transition={{ duration: 0.8}}
      className='container mx-auto px-4 py-32 text-white'
    >

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity : 0, y: 20}}
        transition={{ delay: 0.2, duration: 0.6}}
        className='text-6xl font-bold mb-12'
      >
        KEY METRICS
      </motion.h2>

    </motion.section>
  );
};
