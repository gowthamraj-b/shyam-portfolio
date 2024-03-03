import React from 'react';
import '../../css/card.css';

export default function MyComponent({ current_projects }) {
  return (
    <div className='flex flex-wrap justify-center lg:gap-14 lg:justify-between lg:mt-6'>
      {current_projects.map((project) => (
        <button
          key={project.id}
          className='button_p lg:w-2/5 md: w-full lg:mb-0 mb-6 px-4 py-2 border lg:h-20  ' // Adjust the height as per your design
        >
          <p className='text-center'>{project.name}</p>
        </button>
      ))}
    </div>
  );
}
