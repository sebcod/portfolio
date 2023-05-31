import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const YourResto = () => {
  return (
    <main>
      <Mouse projectNumber={2} />
      <div className="project">
        <Navigation projectNumber={2} />
        <Logo />
        <Project projectNumber={2} />
        <Buttons
          left={"/ScottoDicesare"}
          right={"/YourBlog"}
          projectNumber={2}
        />
      </div>
    </main>
  );
};

export default YourResto;
