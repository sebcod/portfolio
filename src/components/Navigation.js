import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const Navigation = (props) => {
  const [currentProject] = useState(projectsData[props.projectNumber]);

  return (
    <div className="navigation">
      <span
        className="cercle-navigation"
        style={{
          border: "1px solid " + currentProject.color,
          // background: "transparent",
        }}
      ></span>

      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li style={{ color: currentProject.color }}>Home</li>
        </NavLink>

        <li className="nav-portfolio" style={{ color: currentProject.color }}>
          Portfolio
          <ul className="nav-projects">
            <NavLink
              to="/Nintendo"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-nintendo" style={{ color: currentProject.color }}>
                Nintendo
              </li>
            </NavLink>
            <NavLink
              to="/ScottoDiCesare"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li
                id="nav-li-ScottoDiCesare"
                style={{ color: currentProject.color }}
              >
                Scotto Di Cesare
              </li>
            </NavLink>
            <NavLink
              to="/YourResto"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-YourResto" style={{ color: currentProject.color }}>
                Your resto
              </li>
            </NavLink>
            <NavLink
              to="/YourBlog"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-YourBlog" style={{ color: currentProject.color }}>
                Your blog
              </li>
            </NavLink>
            <NavLink
              to="/ComeUp"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li id="nav-li-ComeUp" style={{ color: currentProject.color }}>
                ComeUp
              </li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
