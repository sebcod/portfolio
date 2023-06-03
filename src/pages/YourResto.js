import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const YourResto = () => {
  const [currentProject] = useState(projectsData[3]);
  return (
    <main>
      <Mouse projectNumber={3} />
      <div
        className="project"
        style={{
          backgroundColor: currentProject.background,
          color: currentProject.color,
        }}
      >
        <Navigation projectNumber={3} />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/Nintendo"} right={"/YourBlog"} projectNumber={3} />
      </div>
    </main>
  );
};

export default YourResto;
