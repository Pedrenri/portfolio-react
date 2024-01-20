import React, { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const SkillItem = ({ imgSrc, altText, skillName, fillPercentage, level }) => {
  const [hover, setHover] = useState(false);
  const controls = useAnimation();

  const liquidVariants = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: `${fillPercentage}%`,
      opacity: 1,
      transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
  };

  const handleHover = (isHovered) => {
    setHover(isHovered);
    controls.start(isHovered ? 'visible' : 'hidden');
  };

  return (
    <motion.div
      className="item"
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
      style={{ overflow: 'hidden' }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="img-holder">
        <img src={imgSrc} alt={altText} />
        <motion.div
          className="liquid"
          style={{ height: `${fillPercentage}%` }}
          variants={liquidVariants}
          initial="hidden"
          animate={controls}
        >
          <h3>{level}</h3>
        </motion.div>
      </div>
      <h5>{skillName}</h5>
    </motion.div>
  );
};

export default SkillItem;
