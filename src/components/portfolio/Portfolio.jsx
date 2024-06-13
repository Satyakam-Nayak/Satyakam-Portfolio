import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "K-means Clustering Analysis",
    img: "ml.jpg",
    desc: "Executed K-means clustering on Iris, Diabetes, and Breast Cancer datasets utilizing Python and scikit-learn. Evaluated clustering quality with intra-cluster and inter-cluster distances, and assessed accuracy via confusion matrices",
    link: "https://github.com/Satyakam-Nayak/K-means-Clustering-Analysis",
  },
  {
    id: 2,
    title: "Little Lemon Website",
    img: "littlelemon.jpg",
    desc: "Developed a visually appealing and user-friendly restaurant website, enhancing the online presence and customer experience while creating an online reservation system that streamlined the booking process for users and increased operational efficiency",
    link: "https://github.com/Satyakam-Nayak/Little-Lemon",
  },
  {
    id: 3,
    title: "GroNow Ecommerce",
    img: "grownow.jpg",
    desc: "Designed and developed a robust e-commerce website to enhance user experience and drive sales growth. Implemented seamless payment integration and advanced search functionality to streamline the shopping process and improve customer satisfaction",
    link: "https://github.com/Satyakam-Nayak/Ecomm-Dashboard",
  },
  // {
  //   id: 4,
  //   title: "Music App",
  //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
  // },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => {window.open(item.link)}}>
              Github Link
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
