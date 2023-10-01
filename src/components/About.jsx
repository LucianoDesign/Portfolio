import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import Tech from "./Tech";



const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an aspiring full-stack developer with a strong foundation in JavaScript and expertise in frameworks like React and Node.js. While I'm still learning TypeScript, I have a solid grasp of SQL and MongoDB. I'm passionate about collaborating closely with clients to create efficient, scalable, and user-friendly solutions that tackle real-world problems. I'm a quick learner and enthusiastic about bringing innovative ideas to life. Let's work together to transform your concepts into reality!
      </motion.p>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
