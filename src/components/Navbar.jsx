import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const elements = [
    { name: "Home", link: 'home' },
    { name: "About Me", link: 'about' },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" }
  ];
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex md:justify-around items-center bg-black text-white fixed w-full h-20 bg-opacity-90">
      <div>
        <h5 className='font-signature text-5xl px-10 mx-5 text-white'> <span className='text-green-500'>S</span>hyam</h5>
      </div>

      {/* Navigation for medium and larger screens */}
      <ul className={`space-x-4 md:flex hidden  ${open ? 'hidden' : 'block'}`}>
        {elements.map((rout) => (
          <Link
            to={rout.link}
            key={rout.name}
            smooth={true}
            duration={500}
            onClick={() => setOpen(false)} // Close the menu on item click
          >
            <li className="hover:text-green-500 hover:scale-105 duration-300">
              {rout.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Hamburger menu icon for small screens */}
      <div
        onClick={() => setOpen(!open)}
        className="md:hidden absolute right-8 top-6 cursor-pointer w-7 h-7 text-primary text-white"
      >
        {open ? <XMarkIcon className='text-white' /> : <Bars3Icon className='text-green-500' />}
      </div>

      {/* Mobile menu for small screens */}
      {open && (
        <ul className="flex flex-col justify-center items-end top-20 py-4 right-0 absolute w-full md:hidden backdrop-blur-sm text-green-500">
          {elements.map((rout) => (
            <Link
              to={rout.link}
              key={rout.name}
              smooth={true}
              duration={500}
              onClick={() => setOpen(false)} // Close the menu on item click
            >
              <li className="hover:text-green-500 hover:scale-105 duration-300 my-2 py-3 px-6 font-semibold border-green-100 border-spacing-2 w-full">
                {rout.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
}
