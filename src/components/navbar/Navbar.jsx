import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Welcome
        </motion.span>
        <div className="social">
          <a href="https://github.com/Satyakam-Nayak">
            <img src="/github1.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/satyakamnayak2002/">
            <img src="/leetcode.png" alt="" />
          </a>
          <a href="https://www.instagram.com/wrench.ie/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://linkedin.com/in/satyakam-nayak/">
            <img src="/linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
