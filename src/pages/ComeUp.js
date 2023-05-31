import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const ComeUp = () => {
  const [currentProject] = useState(projectsData[5]);

  return (
    <main>
      <Mouse projectNumber={5} />
      <div
        className="project"
        style={{
          backgroundColor: currentProject.background,
          color: currentProject.color,
        }}
      >
        <Navigation projectNumber={5} />
        <Logo />
        <Project projectNumber={5} />
        <Buttons left={"/YourBlog"} projectNumber={5} />
      </div>
    </main>
  );
};
export default ComeUp;
