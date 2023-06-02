import React, { useState } from "react";
import { projectsData } from "../data/projectsData";

const ButtonGitHub = ({ projectNumber }) => {
  const [currentProject] = useState(projectsData[projectNumber]);
  return (
    <a href={currentProject.linkGitHub} style={{ color: currentProject.color }}>
      <i className="fa-brands fa-github buttonGitHub"></i>
    </a>
  );
};

export default ButtonGitHub;
