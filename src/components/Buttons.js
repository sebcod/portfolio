import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { projectsData } from "../data/projectsData";

const Buttons = (props) => {
  const [currentProject] = useState(projectsData[props.projectNumber]);
  return (
    <div className="scroll-bottom">
      {props.projectNumber === undefined && props.right && (
        <NavLink to={props.right} className="right hover">
          <span>&#10093;</span>
        </NavLink>
      )}
      {props.projectNumber !== undefined && props.left && (
        <NavLink to={props.left} className="left hover">
          <span style={{ color: currentProject.color }}>&#10092;</span>
        </NavLink>
      )}
      {props.projectNumber !== undefined && props.right && (
        <NavLink to={props.right} className="right hover">
          <span style={{ color: currentProject.color }}>&#10093;</span>
        </NavLink>
      )}
    </div>
  );
};

export default Buttons;
