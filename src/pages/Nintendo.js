import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const Nintendo = () => {
  const [currentProject] = useState(projectsData[2]);
  return (
    <main>
      <Mouse projectNumber={2} />
      <div
        className="project"
        style={{
          backgroundColor: currentProject.background,
          color: currentProject.color,
        }}
      >
        <Navigation projectNumber={2} />
        <Logo />
        <Project projectNumber={2} />
        <Buttons
          left={"/ScottoDiCesare"}
          right={"/YourResto"}
          projectNumber={2}
        />
      </div>
    </main>
  );
};
export default Nintendo;
