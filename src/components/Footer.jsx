import React from 'react'
import SocialIcons from '../components/social/social.jsx'
import '../css/bg-blur.css'

export default function footer() {
  return (
    <>    
        <div className='bg-slate-950 text-white'>
            <div className='flex py-3 justify-around align-middle items-center'>
                <div className='relative'>
                    <h2 className='font-signature text-3xl'>
                        Shyam T . R
                    </h2>
                    <div className=''>
                        <p>
                            A Web Developer building the Websites
                        </p>
                        <span>

                        and
                        Step into the carear of AI and ML
                        </span>
                    </div>
                </div>
                <div>
                    Copyright<span className='text-green-500 font-bold text-xl'>@</span>2024
                </div>
                

            </div>
        
        </div>
    </>
  )
}
