"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  {
    id: 1,
    value: "2+",
    color: "text-pink-300",
    label: "Years of Experience",
    description: "Dedicated to honing my skills in software engineering.",
  },
  {
    id: 2,
    value: "30+",
    color: "text-blue-300",
    label: "Projects Completed",
    description:
      "From small solo projects to large-scale applications in a team.",
  },
  {
    id: 3,
    value: "10+",
    color: "text-green-300",
    label: "Technologies Mastered",
    description: "Proficiency in programming languages, frameworks and tools.",
  },
  {
    id: 4,
    value: "85%",
    color: "text-yellow-300",
    label: "Code Quality",
    description: "Committed to writing clean, efficeint and maintainable code.",
  },
  {
    id: 5,
    value: "300+",
    color: "text-purple-300",
    label: "Github Contributions",
    description: "Active contributor to open-source and private projects",
  },
  {
    id: 6,
    value: "20+",
    color: "text-red-300",
    label: "Students Trained",
    description: "A tutor of computer related skills of various levels",
  },
];

export const KeyMetrics = () => {
  const ref = React.useRef<HTMLElement>(null);

  const isInView = useInView(ref, { once: false });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="container mx-auto px-4 py-32 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-6xl font-bold mb-12"
      >
        <div className="md:w-1/4 pr-8 mb-12 md:mb-0">
          <h2 className="text-5xl font-extrabold:sticky top-20">
            <span>KEY METRICS</span>
          </h2>
        </div>
        {/* <span><h2>KEY METRICS</h2></span>  */}
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
            className="flex flex-col"
          >
            <motion.h3
              initial={{ scale: 0.5 }}
              animate={isInView ? { scale: 1 } : { scale: 0.5 }}
              transition={{
                delay: 0.6 + index * 0.1,
                duration: 0.4,
                type: "spring",
              }}
              className={`text-5xl font-bold ${metric.color} mb-2`}
            >
              {metric.value}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.0 + index * 0.1, duration: 0.4 }}
              className="text-xl font-semibold mb-2"
            >
              {metric.label}
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.4 }}
              className="text-gray-400"
            >
              {metric.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
