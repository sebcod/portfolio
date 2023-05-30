import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { projectsData } from "../data/projectsData";
import { color } from "framer-motion";

const Navigation = (props) => {
  function changeBackground(e) {
    e.target.style.color = "red";
  }

  const [currentProject] = useState(projectsData[props.projectNumber]);
  // console.log(projectsData);
  return (
    <div className="navigation">
      {props.projectNumber ? (
        <span
          className="cercle-navigation"
          style={{ background: currentProject.color }}
        ></span>
      ) : (
        <span className="cercle-navigation"></span>
      )}

      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>Home</li>
        </NavLink>

        <li className="nav-portfolio">
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/Nintendo"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-nintendo">Nintendo</li>
            </NavLink>
            <NavLink
              to="/ScottoDiCesare"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-ScottoDiCesare">Scotto Di Cesare</li>
            </NavLink>
            <NavLink
              to="/YourResto"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-YourResto">Your resto</li>
            </NavLink>
            <NavLink
              to="/YourBlog"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-YourBlog">Your blog</li>
            </NavLink>
            <NavLink
              to="/ComeUp"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-ComeUp">ComeUp</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
