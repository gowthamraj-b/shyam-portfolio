import React from 'react'
import html from '../../assets/Skillsimg/html.png';
import css from '../../assets/Skillsimg/css.png';
import js from '../../assets/Skillsimg/js.png';
import react from '../../assets/Skillsimg/react.png';
import tailwind from '../../assets/Skillsimg/tailwind.png';
import pytorch from '../../assets/Skillsimg/pytorch.png';
import tensorflow from '../../assets/Skillsimg/tensorflow.png';
import jupyter from '../../assets/Skillsimg/jupyter.png';
import git from '../../assets/Skillsimg/git.png';
import github from '../../assets/Skillsimg/github.png';
import numpy from '../../assets/Skillsimg/numpy.png';
import python from '../../assets/Skillsimg/python.png';
// import '../../css/bg-blur.css'

export default function SkillCard() {
    const skills=[
        {id:1,name:"HTML",image:html,style:'shadow-orange-500'},
        {id:2,name:"CSS",image:css,style:'shadow-blue-300'},
        {id:3,name:"JS",image:js,style:'shadow-yellow-500'},
        {id:4,name:"React",image:react,style:'shadow-blue-600'},
        {id:11,name:"GitHub",image:github,style:'shadow-green-500'},
        {id:5,name:"Tailwind",image:tailwind,style:'shadow-sky-500'},
        {id:6,name:"Tensorflow",image:tensorflow,style:'shadow-yellow-300'},
        {id:7,name:"Jupyter",image:jupyter,style:'shadow-sky-500'},
        {id:12,name:"Git",image:git,style:'shadow-orange-700'},
        {id:8,name:"PyTorch",image:pytorch,style:'shadow-violet-500'},
        {id:9,name:"python",image:python,style:'shadow-amber-300'},
        {id:10,name:"numpy",image:numpy,style:'shadow-indigo-400'},
       

    ]
  return (
    <>
<div name='skills' className='text-center'>
  <h1 className='lg:text-5xl font-signature text-4xl text-white'>
    My Skills <span className='shadow- text-green-500'>....</span>
  </h1>
  <div className='w-full    mt-3 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
    {skills.map(({ id, image, name, style }) => (
<div key={id} className={`shadow-md hover:scale-105 duration-500 rounded-lg mx-4 px-20 my-4 text-center ${style}`}>
  <img
    src={image}
    alt={name}
    className='w-20 h-20 object-cover mx-auto my-2'
  />
  <p className='mt-2'>{name}</p>
</div>
    ))}
  </div>
</div>

    </>
  )
}
