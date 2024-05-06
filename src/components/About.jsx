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
I'm a Full Stack Web developer with expertise in frameworks like Next.js and Node.js. My preferred language is JavaScript, but I also have some knowledge of Python. For relational databases, I use PostgreSQL or MySQL, and for non-relational databases, I utilize MongoDB. I am a quick learner, passionate about exploring new technologies and solving real-world problems. Let's connect to discuss our next project! 🚀
      </motion.p>
      <Tech />
    </>
  );
};

export default SectionWrapper(About, "about");
