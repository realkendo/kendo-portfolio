"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import project1 from "@/assets/project1.png";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import { useMotionTemplate, useMotionValue, motion, animate } from "framer-motion";


const projects = [
  {
    id: 1,
    year: 2021,
    title: "AI Project",
    name: "Project 1",
    image: project1,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo ultrices fermentum. Cras auctor, orci nec ultricies luctus, urna",
  },
  {
    id: 2,
    year: 2021,
    title: "Web2 Project",
    name: "Project 2",
    image: project2,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo ultrices fermentum. Cras auctor, orci nec ultricies luctus, urna",
  },
  {
    id: 3,
    year: 2023,
    title: "Web3 Project",
    name: "Project 3",
    image: project3,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla ac justo ultrices fermentum. Cras auctor, orci nec ultricies luctus",
  },
];


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#00cc99", "#baebae"];


export const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const color = useMotionValue(COLORS_TOP[0]);
  
  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;


  return (
    <motion.section 
      style={{ backgroundImage }}
      id="portfolio" 
      className="py-32 tect-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-6xl fotn-bold mb-10">
            {" "}
            Selected <span className="text-gray-400">Projects</span>{" "}
          </h2>
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer mb-8 group"
            >
              <p className="text-gray-400 text-lg mb-2">{project.year}</p>
              <h3
                className={`text-3xl font-semibold group-hover:text-gray-400 transition-colors 
              ${
                selectedProject.id === project.id ? "text-gray-200" : ""
              } duration-300`}
              >
                {project.title}
              </h3>
              {selectedProject.id === project.id && (
                <div className="border-2 border-gray-200 my-4"></div>
              )}
              {selectedProject.id === project.id && (
                <p className="text-gray-400 transition-all-duration-300">
                  {project.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <Image
          src={selectedProject.image.src}
          alt={selectedProject.title}
          className="rounded-xl shadow-lg transition-opacity duration-500 ease-in-out"
          width={900}
          height={800}
        />
      </div>
    </motion.section>
  );
};
