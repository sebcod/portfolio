import React, { useState } from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";
import { projectsData } from "../data/projectsData";

const ComeUp = () => {
  const [currentProject] = useState(projectsData[4]);

  return (
    <main>
      <Mouse projectNumber={4} />
      <div
        className="project"
        style={{
          backgroundColor: currentProject.background,
          color: currentProject.color,
        }}
      >
        <Navigation projectNumber={4} />
        <Logo />
        <Project projectNumber={4} />
        <Buttons left={"/YourBlog"} projectNumber={4} />
      </div>
    </main>
  );
};
export default ComeUp;
