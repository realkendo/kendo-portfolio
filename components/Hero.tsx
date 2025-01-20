"use client";

import { useEffect } from "react";
import { animate, useMotionValue, useMotionTemplate, motion } from "framer-motion";
import obj from "@/public/handshake.png";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";


const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C", "#00cc99", "#baebae"];


export const Hero = () => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 5,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #000 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;
  return (
    <>
      <motion.section
        style={{ backgroundImage }}
        className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
      >
        <div className="z-10 flex flex-col items-center">
          {/* <span className="mb-1.5 inline-block rounded-full bg-gray-600/20 px-3 py-1.5 text-sm">
            OPEN FOR DEALS
          </span> */}
          <h1 className="text-white/40 text-5xl font-blck my-5"> Welcome to my site, I am</h1>
          <span className="max-w-3xl bg-gradient-to-br from-white to-gray-400 bg-clip-text font-black leading-tight text-transparent md:text-7xl">
          <motion.button
            style={{ border, boxShadow }}
            whileHover={{}}
            whileTap={{}}
            className="flex w-fit items-center border-2 border-dotted gap-2 px-4 py-2"
          > k3nd0
          </motion.button>
          </span>
          
          <Image
            src={"/myPhoto.png"}
            alt="Profile Pic"
            width={250}
            height={250}
          />

          <div className="flex bg-white/10 shadow-xl p-3 rounded-3xl justify-centered items-center space-x-2 mb-4">
            <Image
              src={obj}
              alt="Globe"
              width={20}
              height={20}
              className="rounded-2xl mx-auto"
            />

            <Image
              src={obj}
              alt="Globe"
              width={20}
              height={20}
              className="rounded-2xl mx-auto"
            />

            <Image
              src={obj}
              alt="Globe"
              width={20}
              height={20}
              className="rounded-2xl mx-auto"
            />
            <p className="font-medium">10+ Satisfied Clients</p>
          </div>
            <h2>Kenneth Istifanus</h2>
          <h3 className="my-6 max-w-xl">
            Telecom Engineer & Web Developer from Nigeria... with over 2yrs
            experience.
          </h3>

          <motion.button
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.985 }}
            className="flex w-fit items-center gap-2 rounded-full px-4 py-2"
          >
            Download CV
            <FiArrowRight />
          </motion.button>
        </div>

        <div className="bg-circle-container">
          <div className="bg-circle-background"></div>
          <div className="bg-circle"></div>
        </div>

      </motion.section>
    </>
  );
};
