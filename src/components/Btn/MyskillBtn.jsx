import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Skills from '../Skills';
import '../../css/Myskills-btn.css';

export default function MyskillBtn() {
  const [isSlideIn, setIsSlideIn] = useState(false);

  const handleButtonClick = () => {
    setIsSlideIn(!isSlideIn);
  };

  const handleClose = () => {
    setIsSlideIn(false);
  };

  return (
    <div>
      <button className="button mt-4" data-text="Awesome" onClick={handleButtonClick}>
        <span className="actual-text">&nbsp;skills&nbsp;</span>
        <span aria-hidden="true" className="hover-text">&nbsp;skills&nbsp;</span>
      </button>

      <AnimatePresence>
        {isSlideIn && (
          <Skills onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
}
