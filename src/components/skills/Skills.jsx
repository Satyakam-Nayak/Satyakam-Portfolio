import "./skills.scss";
import { color, motion } from "framer-motion";

const text1Variants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const text2Variants = {
  initial: {
    x: 200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};


export const Skills = () => {
  

  return (
    <motion.div className="skills">
        <motion.div 
          className="skill"
          variants={text1Variants}
          initial="initial"
          whileInView="animate"
          >
            <motion.h2 variants={text1Variants}>Programming Skills</motion.h2>
              <img src="/c.png" alt="" />
              <img src="/cpp.png" alt="" />
              <img src="/java.png" alt="" />
              <img src="/python.png" alt="" />
            <motion.h2 variants={text1Variants} style ={{color:"orange"}}>Developer Tools</motion.h2>
              <img src="/html.png" alt="" />
              <img src="/css.png" alt="" />
              <img src="/javascript.png" alt="" />
              <img src="/reactjs.png" alt="" />
              <img src="/nodejs.png" alt="" />
              <img src="/express.png" alt="" />
            <motion.h2 variants={text1Variants}>Databases</motion.h2>
              <img src="/mongodb.png" alt="" />
              <img src="/mysql.png" alt="" />
        </motion.div>
        <motion.div className="certificate"
        variants={text2Variants}
        initial="initial"
        whileInView="animate">
            <motion.button style ={{backgroundColor:"orange", color:"white"}} onClick={() => {window.open("https://drive.google.com/drive/folders/1cN8dUpJKsqbvwSzNMEvS_ZAsbK2-dLjm")}}>Meta Full Stack Certificates</motion.button><br/>
            <motion.button onClick={() => {window.open("https://drive.google.com/file/d/1ERyg4g0G5iIrZ8Cx4vv7CpIMp5I3kn9r/view")}}>Hackerank Basic</motion.button><br/>
            <motion.button style ={{backgroundColor:"orange", color:"white"}} onClick={() => {window.open("https://drive.google.com/file/d/1Xhu1sVEmlw40vtzUftlX_9jMfO_tZNDK/view")}}>Hackerank Intermediate</motion.button><br/>
            <motion.button onClick={() => {window.open("https://drive.google.com/file/d/1rETSBKeu7ORrGDtXLMmxzKkAXwPvXXnn/view?usp=sharing")}}>KIIT Merit Scholarship</motion.button><br/>
            <motion.button style ={{backgroundColor:"orange", color:"white"}} onClick={() => {window.open("https://drive.google.com/file/d/1rGoWU2fbl74uScuK0V3_v9zHAjybKACM/view?usp=drive_link")}}>Youth-20 Consultation Delegate</motion.button><br/>
        </motion.div>
    </motion.div>
  )
}

export default Skills;
