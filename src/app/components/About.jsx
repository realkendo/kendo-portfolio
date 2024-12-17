'use client'

import Image from 'next/image'

export default function About() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="w-64 h-64 mx-auto">
              <Image
                src="/placeholder.svg"
                alt="Profile Picture"
                width={256}
                height={256}
                className="rounded-full"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <p className="text-lg mb-4">
              I'm a passionate web developer with a keen eye for design. I love creating beautiful, functional websites that provide great user experiences.
            </p>
            <p className="text-lg">
              With expertise in React, Next.js, and modern web technologies, I'm always excited to take on new challenges and bring innovative ideas to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

