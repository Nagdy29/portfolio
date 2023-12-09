import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaSass } from "react-icons/fa";
import { SiJquery } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { motion } from "framer-motion";
// variants
import { fadeIn } from "./variants";

export const Skills = () => {
  return (
    <div className="section" id="skils">
      <div className="container mx-auto relative">
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.5 }}
          className="flex  lg:justify-center items-center text-white flex-col gap-3 my-5"
        >
          <h2 className="text-3xl lg:text-5xl font-bold">Skills</h2>
          <p className="font-medium max-w-md my-2 text-gray-500">
            Here are some of my skills on which I have been working on for the
            past 2 years.
          </p>
        </motion.div>

        <div className="card-skills left-0  absolute lg:left-[25%]">
          <motion.h2
            variants={fadeIn("right", 0)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="hover:text-white hover:transition-transform hover:scale-125 hover:ease-in-out    text-gray-400 text-2xl lg:text-4xl font-semibold text-center flex items-center justify-center"
          >
            Frontend
          </motion.h2>
          <div>
            <div className="flex justify-center flex-wrap gap-6 mb-5 my-8">
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out ">
                <FaHtml5 size={25} className="text-red-300" />
                <h2 className="text-2xl  hover:text-white ">Html</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out">
                <FaCss3Alt size={25} className="text-blue-400" />
                <h2 className="text-2xl  hover:text-white ">css</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out">
                <IoLogoJavascript size={25} className="text-yellow-200" />
                <h2 className="text-2xl  hover:text-white ">Js</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out">
                <FaReact size={25} className="text-blue-700" />
                <h2 className="text-2xl  hover:text-white ">React</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out">
                <BiLogoTailwindCss size={25} className="text-blue-500" />
                <h2 className="text-2xl  hover:text-white ">Tailwind</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out">
                <FaSass size={25} className="text-red-400" />
                <h2 className="text-2xl  hover:text-white ">Sass</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-out">
                <SiJquery size={25} className="text-yellow-200" />
                <h2 className="text-2xl  hover:text-white ">Jquery</h2>
              </div>
              <div className=" itemms items-center hover:transition-transform hover:scale-125 hover:ease-in-out">
                <FaBootstrap size={25} className="text-fuchsia-400" />
                <h2 className="text-2xl  hover:text-white ">Bootstrap</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
