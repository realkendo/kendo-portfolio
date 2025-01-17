import React from "react";
// import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { IoLogoNodejs } from "react-icons/io";
import { SiTypescript } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";



const stackItems = [
  {id: 1, name: 'JavaScript', icon: SiJavascript, color: '#ffff00'},
  {id: 2, name: 'React', icon: IoLogoReact, color: '#61DAFB'},
  {id: 3, name: 'TypeScript', icon: SiTypescript, color: '#2277ff'},
  {id: 4, name: 'Next.js', icon: TbBrandNextjs, color: '#000000'},
  {id: 5, name: 'Node.js', icon: IoLogoNodejs, color: '#006600'},
  {id: 6, name: 'TailwindCSS', icon: SiTailwindcss, color: '#00a0a4'},

]


export const Stack = () => {
  return(
    <section className="py-16 glass">
      <div className="max-w-[1200px] mx-auto px-4 text-center">
        <h1 className="text-5xl text-gray-200 font-bold mb-4">My Stack</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid">
          { stackItems.map((item) => (
            <div 
              key={item.id} 
              className="flex items-center justify-center flex-col p-4"
            >
              <div className="mb-4 bg-white/10 p-4 rounded-xl">
                {React.createElement(item.icon, {
                  className: "w-32 h-32", 
                  style: {color: item.color}
                })}
              </div>
              <p className="text-gray-400 font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}