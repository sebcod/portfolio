import React, { useEffect, useState } from "react";
import { projectsData } from "../data/projectsData";
import { motion } from "framer-motion";

const Project = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  const [left, setLeft] = useState();
  const [top, setTop] = useState();
  const [size, setSize] = useState();

  useEffect(() => {
    setLeft(Math.floor(Math.random() * 200 + 700) + "px");
    setTop(Math.floor(Math.random() * 200 + 150) + "px");
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
      opacity: 0.4,
      transition: { duration: 0.35 },
      x: -800,
    },
  };

  const transition = {
    ease: [0.03, 0.87, 0.73, 0.9],
    duration: 0.6,
  };

  const imgAnim = {
    initial: {
      opacity: 0,
      x: Math.floor(Math.random() * 350 * (Math.random() > 0.4 ? 1 : -1)),
      y: Math.floor(Math.random() * 120 * (Math.random() > 0.4 ? 1 : -1)),
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return (
    <motion.div
      className="project-main"
      initial="initial"
      animate="visible"
      exit="exit"
      transition={transition}
      variants={variants}
    >
      <div className="project-content">
        <h1 style={{ color: currentProject.color }}>{currentProject.title}</h1>
        <p>{currentProject.date}</p>
        <span
          className="cercle-1"
          style={{ border: "1px solid" + currentProject.color }}
        ></span>
        <span
          className="cercle-2"
          style={{ background: currentProject.color }}
        ></span>
        <ul className="languages">
          {currentProject.languages.map((item) => {
            return (
              <li key={item}>
                <img src={item} alt="languages" />
              </li>
            );
          })}
        </ul>
      </div>
      <motion.div
        initial="initial"
        animate="visible"
        variants={imgAnim}
        transition={{ duration: 1.2 }}
        className="img-content"
      >
        <div className="img-container hover">
          <span>
            <h3>{currentProject.title}</h3>
            <p>{currentProject.infos}</p>
          </span>
          <img
            src={currentProject.img}
            alt={currentProject.title}
            className="img"
          />
        </div>
        <div className="button-container">
          <a
            href={currentProject.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover"
          >
            <span
              className="button"
              style={{
                color: currentProject.color,
                border: "2px solid " + currentProject.color,
              }}
            >
              see website
            </span>
          </a>
        </div>
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
    </motion.div>
  );
};

export default Project;
