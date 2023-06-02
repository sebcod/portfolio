import React, { useEffect, useState } from "react";
import Navigation from "../components/Navigation";
import Mouse from "../components/Mouse";
import SocialNetwork from "../components/SocialNetwork";
import DynamicText from "../components/DynamicText";
import Buttons from "../components/Buttons";
import { motion } from "framer-motion";
import { projectsData } from "../data/projectsData";

const Home = () => {
  const [currentProject] = useState(projectsData[0]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 1100) + "px");
    setTop(Math.floor(Math.random() * 200 + 600) + "px");
    setSize("scale(" + (Math.random() + 0.7) + ")");
  }, []);

  const variants = {
    initial: {
      opacity: 0,
      transition: { duration: 0.5 },
      x: 200,
    },
    visible: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.3 },
      x: -200,
    },
  };
  return (
    <div>
      <Mouse projectNumber={0} />
      <motion.div
        className="home"
        initial="initial"
        animate="visible"
        exit="exit"
        variants={variants}
      >
        <Navigation projectNumber={0} />

        <div
          className="home-main"
          style={{
            backgroundColor: currentProject.background,
            color: currentProject.color,
          }}
        >
          <div className="img-content">
            <img src={currentProject.img} alt={currentProject.title} />
            <SocialNetwork />
          </div>
          <div className="main-content">
            <h1>Sébastien Codus</h1>
            <h2>
              <DynamicText />
            </h2>
          </div>
        </div>
        <Buttons projectNumber={0} right={"/Nintendo"} />
        <span
          className="random-circle"
          style={{
            left,
            top,
            transform: size,
            background: currentProject.color,
          }}
        ></span>
      </motion.div>
    </div>
  );
};

export default Home;
