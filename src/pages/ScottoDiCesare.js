import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const ScottoDiCesare = () => {
  return (
    <main>
      <Mouse projectNumber={1} />
      <div className="project">
        <Navigation projectNumber={1} />
        <Logo />
        <Project projectNumber={1} />
        <Buttons left={"/Nintendo"} right={"/YourResto"} projectNumber={"1"} />
      </div>
    </main>
  );
};
export default ScottoDiCesare;
