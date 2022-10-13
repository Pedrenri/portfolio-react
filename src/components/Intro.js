import { motion } from "framer-motion";

export const Intro = () => {
  return (
    <motion.div
      className="intro"
      animate={{ opacity: 1, y: -1000 }}
      transition={{ delay: 1.5, duration: 0.2 }}
    >
      <h1 className="logo-header  ">
        <motion.span
          className="logo logo-span "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -17 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          PEDRO{" "}
        </motion.span>
        <motion.span
          className="logo logo-span-w "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: -17 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          HENRI
        </motion.span>
      </h1>
    </motion.div>
  );
};

export default Intro;
