import React from 'react';
import SocialIcons from '../components/social/social.jsx';

export default function Contact() {
  return (
    <>
      <div id='contact' className='min-h-screen bg-gradient-to-b from-black to-gray-800'>
        <div className='m-auto'>
          <section className='w-full text-white sm:h-1/4 md:h-1/3 lg:h-1/2 flex flex-col justify-center text-center px-4 pt-12 sm:pt-24 pb-3 '>
            <h2 className='text-4xl font-bold text-slate-200 underline font my-6'>
              Get in Touch
            </h2>
            <p className='text-white sm:text-lg md:text-xl lg:text-2xl xl:text-2xl'>
              Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
            </p>
          </section>

          <div className='flex flex-col  md:flex-row justify-center bg_blur mx-2 sm:mx-4 md:mx-8 '>
            <section className='lg:bg-zinc-950 lg:mx-3 rounded-xl  w-full md:w-1/2  p-4 sm:p-8 md:p-12 mb-6 sm:mb-0 h-auto md:h-2/3'>
              <div className=" text-green-500 rounded-md shadow-md">
                <form action="" className="flex flex-col space-y-3">
                  <label htmlFor="name" className="font-bold text-lg">Name</label>
                  <input type="text" id="name" name="name" placeholder="Your Name" required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  />

                  <label htmlFor="email" className="font-bold text-lg">Email Address</label>
                  <input type="text" id="email" name="email" placeholder="Your Email" required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  />

                  <label htmlFor="contact" className="font-bold text-lg">Contact Number</label>
                  <input type="text" id="contact" name="contact" placeholder="Your Contact Number" required
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  />

                  <label htmlFor="message" className="font-bold text-lg">Message</label>
                  <textarea name="message" id="message" cols="3" rows="5"
                    className="w-full px-4 py-2 border border-gray-700 rounded-md bg-transparent text-white focus:outline-none focus:border-green-500"
                  ></textarea>

                  <button type="submit"
                    className="bg-green-500 text-black px-4 py-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring focus:border-green-300"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </section>
            <section className='my-6 sm:my-auto sm:p-8 md:p-12 mx-auto h-auto md:h-2/3'>
              <h2 className='text-green-500 relative bottom-11 text-center font-signature h-32 flex justify-center align-middle items-center text-4xl'>Follow Me On</h2>
                <SocialIcons />
          
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
