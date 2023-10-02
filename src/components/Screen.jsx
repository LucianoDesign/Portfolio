import { motion } from "framer-motion";
import { ComputerSim } from "./canvas";
import { styles } from "../styles";
import { navLinks } from "../constants";

export default function Screen() {
  return (
    <div className="relative bg-gray-50 overflow-hidden z-30">
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 justify-between fixed top-0 z-20 black-gradient `}
      >
        <div className="'w-full flex  items-center max-w-7x1 mx-auto'">
          <img
            className="h-8 w-auto h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt=""
          />
          <span className="p-2">Luciano | Full Stack Dev</span>
        </div>
        <ul className="list-none flex gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={` 
            hover:text-white 
            text-[18px]
            font-medium
            text-secondary
            cursor-pointer`}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <main>
      <div
        className={`${styles.paddingX}
      absolute
      inset-0 
      top-[120px]
      max-w-7x1
      mx-auto
      flex
      flex-row
      items-start
      gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-tertiary" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadTextScreen} text-black`}>
            Hi, I'm <span className="text-tertiary">Luciano</span>
          </h1>
          <p className={`${styles.heroSubTextScreen} mt-2 text-black`}>
            I'm a full stack developer <br className="xs:block hidden" />{" "}
            on a mission to solve real-world<br className="xs:block hidden" />{" "}
             problems through web applications.
          </p>
        </div>
      </div>
      <div className="flex w-full h-[600px] relative ">
      <ComputerSim />

      </div>
        <div className=" flex justify-center">
          <div className="absolute xs:bottom-10 bottom-2 w-full flex justify-center items-center">
            <a href="#about">
              <div className="w-[35px] h-[64px] rounded-3xl border-4 border-black-100 flex justify-center items-start p-2">
                <motion.div
                  animate={{
                    y: [0, 24, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                  className="w-3 h-3 rounded-full bg-tertiary mb-1"
                />
              </div>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
