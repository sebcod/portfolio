import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const Nintendo = () => {
  const [currentProject] = useState(projectsData[0]);
  return (
    <main>
      <Mouse projectNumber={0} />
      <div
        className="project"
        style={{
          backgroundColor: currentProject.background,
          color: currentProject.color,
        }}
      >
        <Navigation projectNumber={0} />
        <Logo />
        <Project projectNumber={0} />
        <Buttons left={"/"} right={"/ScottoDiCesare"} projectNumber={0} />
      </div>
    </main>
  );
};

export default Nintendo;
