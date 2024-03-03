import React from 'react';
import a_a from '../assets/a_a.jpg';
import '../css/Myskills-btn.css';
import Card from './Cards/Card';
import MyskillBtn from './Btn/MyskillBtn';

const current_projects = [
  { id: 1, name: 'JupyterHub' },
  { id: 2, name: 'Flask' },
  { id: 3, name: 'React with Redux' },
  { id: 4, name: 'React Native' },
  { id: 5, name: 'Tensorflow' },
  { id: 6, name: 'Pytorch' },
];

export default function About() {
  return (
    <>
      <div id="about" className='flex flex-col min-h-screen bg-gradient-to-b from-gray-800 to-black '> {/* Added mt-16 for margin-top */}
        <div className='m-auto mt-32 md:mb-24'>

          <section className='w-full text-white sm:h-1/4 md:h-1/3 lg:h-1/2 flex flex-col justify-center text-center px-4 '>
            <h2 className='text-4xl font-bold text-slate-200 underline decoration-4 decoration-green-500 font my-6'>
              About Me
            </h2>
            <p className='text-white  sm:text-xl md:text-2xl lg:text-2xl xl:text-2xl'>
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </p>
          </section>

          <div className='flex flex-col sm:flex-row justify-around my-14 xl:mx-28'>

            <section className='w-full sm:w-1/2 px-4 py-8 sm:mt-8'>
              <h4 className='text-4xl  mb-4 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-signature text-slate-200'>
                Get to know me <span className='text-green-500'>!</span>
              </h4>
              <div className='sm:w-3/4 text-lg text-white mb-4'>
                <p className='mb-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                  I'm a <strong>Web Developer</strong> building Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the <strong>Projects</strong> section.
                </p>

                <p className='mb-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                  I also like sharing content related to the stuff that I have learned in <strong>Web Development.</strong> Feel free to Connect or Follow me on my <a href='https://github.com/TRshyam/' className='text-secondary font-bold underline'>Github</a> and <a href='https://www.instagram.com/shyam__113/' className='text-secondary font-bold underline'>Instagram</a> where I post useful content related to Web Development and Programming
                </p>

                <p className='mb-5 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl'>
                  I'm open to <strong>Job</strong> opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong>contact</strong> me.
                </p>
                <div className='-z-20'>
                <MyskillBtn/>

                </div>
              </div>
            </section>

            <section className='w-full sm:w-1/2 px-4 py-8 my-5'>
              <h3 className='text-4xl mb-4  font-signature text-slate-100 '>
                Current Projects <span className='text-green-500'>...</span>
              </h3>
              <div className='p-5 m-5'>
                <Card current_projects={current_projects} />
              </div>
            </section>
          </div>

        </div>
      </div>
    </>
  );
}
