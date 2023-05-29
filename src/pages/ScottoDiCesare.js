import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const ScottoDiCesare = () => {
  return (
    <main>
      <Mouse />
      <div className="project">
        <Navigation />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/Nintendo"} right={"/YourResto"} />
      </div>
    </main>
  );
};
export default ScottoDiCesare;
