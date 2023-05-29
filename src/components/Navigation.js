import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink
          to="/"
          className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
        >
          <li>accueil</li>
        </NavLink>

        <li className="nav-portfolio">
          portfolio
          <ul className="nav-projects">
            <NavLink
              to="/Nintendo"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Nintendo</li>
            </NavLink>
            <NavLink
              to="/ScottoDiCesare"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Scotto Di Cesare</li>
            </NavLink>
            <NavLink
              to="/YourResto"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Your resto</li>
            </NavLink>
            <NavLink
              to="/YourBlog"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>Your blog</li>
            </NavLink>
            <NavLink
              to="/ComeUp"
              className={(nav) => (nav.isActive ? "nav-active hover" : "hover")}
            >
              <li>ComeUp</li>
            </NavLink>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
