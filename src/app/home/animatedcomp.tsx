import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import HS2comp from "./HS2";

const AnimatedSection: React.FC = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeInOut" },
    },
  };

  const divVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 0.2 },
    },
  };

  return (
    <motion.section
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={sectionVariants}
      className="flex bg-primary justify-center items-center"
    >
      <motion.div variants={divVariants} className="mt-24">
        <HS2comp />
      </motion.div>
    </motion.section>
  );
};

export default AnimatedSection;
