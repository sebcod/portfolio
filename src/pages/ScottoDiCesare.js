import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const ScottoDiCesare = () => {
  const [currentProject] = useState(projectsData[1]);
  return (
    <main>
      <Mouse projectNumber={1} />
      <div
        className="project"
        style={{
          backgroundColor: currentProject.background,
          color: currentProject.color,
        }}
      >
        <Navigation projectNumber={1} />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/"} right={"/Nintendo"} projectNumber={1} />
      </div>
    </main>
  );
};

export default ScottoDiCesare;
