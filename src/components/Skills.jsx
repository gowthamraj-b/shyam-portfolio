// YourSlideInComponent.js
import React from 'react';
import { motion } from 'framer-motion';
import '../css/bg-blur.css'
import SkillCard from './Cards/SkillCard';

const Skills = ({ onClose }) => {
  return (
    <motion.div
      className=" fixed top-0 right-0 bottom-0 left-0 bg_blur bg overflow-y-auto p-6"
      initial={{ opacity: 0, x: '10%' }}
      animate={{ opacity: 1, x: '0%' }}
      exit={{ opacity: 0, x: '10%' }}
    >
      <div>

        <button
    class="z-50 top-5 right-4 absolute border-2 border-black group hover:border-green-500 w-8 h-8 duration-500 overflow-hidden"
    onClick={onClose}
    type="button"
  >
    <p
      class="font-Manrope text-2xl h-full w-full flex items-center justify-center text-green-500 duration-500 relative z-10 group-hover:scale-0"
    >
      x
    </p>
    <span
      class="absolute w-full h-full bg-green-500 rotate-45 group-hover:top-6 duration-500 top-12 left-0"
    ></span>
    <span
      class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:left-6 duration-500 left-12"
    ></span>
    <span
      class="absolute w-full h-full bg-green-500 rotate-45 top-0 group-hover:right-6 duration-500 right-12"
    ></span>
    <span
      class="absolute w-full h-full bg-green-500 rotate-45 group-hover:bottom-6 duration-500 bottom-12 right-0"
    ></span>
        </button>
        {/* Your slide-in content goes here */}
        <SkillCard/>
      </div>
    </motion.div>
  );
};

export default Skills;
