import React from 'react'

export default function SocialBar() {
  return (
    <>
    <div className="bg-white w-20 rounded py-1 px-2 absolute left-0 top-48 hidden md:block">
        <div className="my-1">
          <a
            href="#"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={LinkedIn} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://www.instagram.com/shyam__113/"
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={Insta} alt="" className="w-10 h-10" />
          </a>
        </div>
        <div className="my-1">
          <a
            href="https://github.com/TRshyam" 
            className="p-3 hover:bg-slate-400 block rounded transition-all duration-500"
          >
            <img src={GitHub} alt="" className="w-10 h-10" />
          </a>
        </div>
      </div>

    </>
  )
}
