import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-500%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};



const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>SATYAKAM NAYAK</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Web <motion.h1 style={{color: "orange"}}>Developer</motion.h1>
          </motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button onClick={() => {window.open("https://drive.google.com/file/d/1tJD_it-zoWfWtsAGe22flmzNCQBh9Gkn/view?usp=drive_link")}}>
                Download Resume
            </motion.button>

            {/* <motion.button variants={textVariants}>Contact Me</motion.button> */}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Photography Travelling Coding 
      </motion.div>
      <div className="imageContainer">
        <img src="/satyakam.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
