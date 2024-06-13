import "./about.scss";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.div className="about">
      <motion.div className="description">
        <motion.div className="search" style={{ color: "white", backgroundColor: "orange" }}>
          <img src="/search.png" alt="" />
          <p>Satyakam Nayak</p>
          <img src="/google.png"  style={{width: "30px", height: "30px"}} alt="" />
        </motion.div>
        <motion.div className="details">
          <p>
            Hello, <br />
            My name is Satyakam Nayak, a fourth year student and I am from Bhubaneswar, Odisha.
            I am currently pursuing B.Tech in Computer Science and Engineering from Kalinga Institute of Industrial Technology (KIIT), Bhubaneswar, with a CGPA of 9.1.
            I completed my schooling at Mother's Public School, Bhubaneswar, where I scored 92% in my 12th board examinations.
            My primary programming language is C++, and I am proficient in MERN stack development, which includes expertise in MongoDB, Express.js, React, and Node.js.
            In addition to my academic pursuits, I am deeply passionate about photography, traveling, cooking, and watching anime.
            These hobbies allow me to explore my creative side and relax during my free time.
            I am also an active member of Keurig, which is part of the KIIT Student Activity Centre (KSAC).
            Through Keurig, I have gained valuable experience in event management by being part of the organizing committee for various events.
            My technical skills, combined with my active participation in extracurricular activities, have helped me develop a well-rounded personality.
            I am constantly seeking new challenges and opportunities to learn and grow, both personally and professionally.
          </p>
        </motion.div>
      </motion.div>
      <motion.div className="crousel">
        <img src="https://media.giphy.com/media/xTiTnxpQ3ghPiB2Hp6/giphy.gif?cid=ecf05e47zy1uijq4hr1a1gjhrwizagfg18n6ygo6nvl71cyq&rid=giphy.gif&ct=g" alt="" />
        
      </motion.div>
    </motion.div>
  )
}

export default About

