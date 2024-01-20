import React from "react";
import { motion } from "framer-motion";

const Intro = () => {
  const spanVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: -17 },
  };

  return (
    <motion.div
      className="intro"
      animate={{ opacity: 1, y: -10000 }}
      transition={{ delay: 1.5, duration: 0.3 }}
    >
      <h1 className="logo-header">
        <motion.span
          className="logo logo-span"
          initial="hidden"
          animate="visible"
          variants={spanVariants}
          transition={{ delay: 0.1, duration: 0.3 }}
        >
          PEDRO{" "}
        </motion.span>
        <motion.span
          className="logo logo-span-w"
          initial="hidden"
          animate="visible"
          variants={spanVariants}
          transition={{ delay: 0.2, duration: 0.3 }}
        >
          HENRI
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default Intro;