import React from "react";
import Buttons from "../components/Buttons";
import Logo from "../components/Logo";
import Mouse from "../components/Mouse";
import Navigation from "../components/Navigation";
import Project from "../components/Project";

const YourBlog = () => {
  return (
    <main>
      <Mouse projectNumber={3} />
      <div className="project">
        <Navigation projectNumber={"3"} />
        <Logo />
        <Project projectNumber={3} />
        <Buttons left={"/YourResto"} right={"/ComeUp"} projectNumber={"3"} />
      </div>
    </main>
  );
};
export default YourBlog;
