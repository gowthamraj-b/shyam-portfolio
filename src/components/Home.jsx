import React from 'react';
import { Link } from 'react-router-dom';  // Import Link

import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import LinkedIn from "../assets/socials/linkedin.svg";
import Insta from "../assets/socials/insta.svg";
import GitHub from "../assets/socials/github.svg";

import bww from '../assets/bww.png';
import Project_btn from './Porbtn';

export default function Home() {
  return (
    <>
      <div name="home" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white '>
        <div className='flex justify-center items-center h-full px-5'>
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center text-center '>
              <h3 className='font-signature font-thin text-6xl mb-7 text-white  tracking-wider'>Hi, <span className='text-green-400'>I'm</span> Shyam</h3>
              <TypeAnimation
                className="font-semibold text-transparent leading-10 bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 items-center "
                sequence={[
                  "If you think math is hard, try web design",
                  1000,
                  "Have no fear of perfection—you'll never reach it.",
                  1000,
                  "You don't have to be 'a creative' to be creative.",
                  1000,
                  "I strive for two things in design: simplicity and clarity.",
                  1000,
                ]}
                speed={40}
                style={{ fontSize: "2em", lineHeight: "1.25em", height: "25vh", padding: "2rem" }}
                repeat={Infinity}
              />
            </div>
      <div className='mt-2'>
        {/* Use Link component to navigate to the Projects page */}
          <Project_btn />

      </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-400 bg-opacity-15 w-20 rounded py-1 px-2 absolute left-0 top-1/3 hidden md:block ">
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-gray-950 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://www.instagram.com/shyam__113/"
            className="p-3 hover:bg-gray-950 block rounded transition-all duration-500"
          >
            <img src={Insta} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/TRshyam"
            className="p-3 hover:bg-gray-950 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>
    </>
  );
}
