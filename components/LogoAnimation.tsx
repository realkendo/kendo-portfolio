"use client"

import Image from "next/image"
import { motion} from "framer-motion"
import wordpress  from "@/assets/img-wordpress.png"
import elementor from "@/assets/img-elementor.png" 
import microsoft from "@/assets/img-microsoft.png"
import vscode from "@/assets/img-vscode.png"

const images = [
  {src: microsoft, alt: "microsft"},
  {src: wordpress, alt: "Wordpress"},
  {src: elementor, alt: "elementor"},
  {src: wordpress, alt: "Oracle"},
  {src: vscode, alt: "vscode"},
  {src: microsoft, alt: "microsft"},
]


export const LogoAnimation = () => {
  return(
    <div className="py-8 bg-purple-200/10 opacity-80">
      <div className="container mx-auto">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right, _transparent, _black_25%, _black_75%, _transparent)]">
          <motion.div 
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: '-50%',
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop"
            }} 
          >
              {images.map((image, index) => (
                <Image 
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  height={100}
                  width={100}
                />
              ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}