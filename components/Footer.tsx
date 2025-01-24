"use client";

import { useEffect } from "react";
import {
  animate,
  useMotionValue,
  useMotionTemplate,
  motion,
} from "framer-motion";
import {
  FiTwitter,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiInstagram,
} from "react-icons/fi";

const COLORS_BOTTOM = ["#DD335C", "#1E67C6", "#FF9913", "#1E67C6"];

export const Footer = () => {
  const color = useMotionValue(COLORS_BOTTOM[0]);

  useEffect(() => {
    animate(color, COLORS_BOTTOM, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color]);

  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <>
      <div className="z-10 flex flex-col items-center glass py-2">
        <div className="flex gap-4 mb-4">
          <motion.a
            href="https://x.com/KendoIstifanus"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dotted mx-2"
          >
            <FiTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/kenneth-istifanus-aa9a361a1/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dotted mx-2"
          >
            <FiLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://github.com/realkendo"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dotted mx-2"
          >
            <FiGithub size={24} />
          </motion.a>

          <motion.a
            href="https://web.facebook.com/kenneth.istifanus/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dotted mx-2"
          >
            <FiFacebook size={24} />
          </motion.a>

          <motion.a
            href="https://www.instagram.com/kendoistifanus/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ border, boxShadow }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-dotted mx-2"
          >
            <FiInstagram size={24} />
          </motion.a>
        </div>
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} Kenneth Istifanus. All rights
          reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
