import { motion } from "framer-motion";
import { styles } from "../styles";
import Computers from "./Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        {/* Hero section style */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        {/* Name and para */}
        <div className="">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Pranjeet Goswami</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            A proficient MERN and UI/UX developer with a strong foundation{" "}
            <br className="sm:block hidden" /> in web development technologies.
          </p>
        </div>

      </div>
      <Computers />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[30px] h-[50px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev 
            animate={{
              y:[0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-2 h-2 rounded-full bg-secondary mb-5"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
